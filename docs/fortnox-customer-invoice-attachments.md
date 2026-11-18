# Customer invoice attachments

Researched 2026-11-08. Sources: [Fortnox API reference](https://apps.fortnox.se/apidocs) and its [repository snapshot](../fortnox_docs/fortnox_api.json); [Fortnox scopes](https://www.fortnox.se/developer/guides-and-good-to-know/scopes); [invoice attachment support](https://support.fortnox.se/produkthjalp/fakturering-plus/bilagor-for-order-offert-och-kundfaktura).

## Conclusion

**Confirmed in Fortnox:** customer invoices can have PDF attachments included in print, email and e-invoices. A linked file is not necessarily sent: the UI's inclusion checkbox is selected by default, and deselecting it excludes the file from print and email. [Support: linked files](https://support.fortnox.se/produkthjalp/fakturering-plus/bilagor-for-order-offert-och-kundfaktura#kopplade-filer).

**API workflow not fully confirmed:** the OpenAPI snapshot exposes file upload and a separate attachment API with `includeOnSend`, but does not explain the customer-invoice entity code, identifier mapping, attachment scope, or how the upload ID maps to attachment `fileId`. It does not explicitly say that the invoice email endpoint sends these attachments. Confirm with Fortnox or an authorized test before relying on an end-to-end integration.

## API evidence

- **Upload:** `POST /3/archive` accepts `multipart/form-data` with a `file` field and optional `folderid` or `path`; absent either, it uploads to root. `POST /3/inbox` also accepts multipart `file`, with optional `folderId` or `path`. The inbox response has both `Id` and `ArchiveFileId`; the snapshot does not identify which to pass to the attachment API. [Archive](../fortnox_docs/fortnox_api.json#L30270), [inbox](../fortnox_docs/fortnox_api.json#L36071), [inbox response](../fortnox_docs/fortnox_api.json#L11257).
- **Recipient attachment operations:** `POST /api/fileattachments/attachments-v1` attaches an array of attachment objects; `GET` lists by `entityid` and `entitytype`; `PUT` and `DELETE /api/fileattachments/attachments-v1/{attachmentId}` update and detach. `POST /api/fileattachments/attachments-v1/validateincludedonsend` validates attachments to be included on send. The object has `entityId` (integer), `entityType` (`OF`, `O`, `F`, `C`, `LGR_IO`, `LGR_IG`), `fileId` (string), `id` (UUID), and `includeOnSend` (boolean). These operations are marked public in the snapshot; that marker alone does not establish authorization or end-to-end support. [Operations](../fortnox_docs/fortnox_api.json#L50481), [schema](../fortnox_docs/fortnox_api.json#L5387).
- **Sending:** `GET /3/invoices/{DocumentNumber}/email` sends an invoice as email; its description does not specify attachment behavior. [Invoice email](../fortnox_docs/fortnox_api.json#L38654).
- **Do not conflate file connections:** `POST /3/supplierinvoicefileconnections` explicitly connects files to _supplier_ invoices; `/3/voucherfileconnections` concerns vouchers. The snapshot contains no customer-invoice-specific `/3` file-connection resource. These resources do not establish recipient delivery for customer invoices. [Supplier connections](../fortnox_docs/fortnox_api.json#L45492), [voucher connections](../fortnox_docs/fortnox_api.json).

## Scopes and limits

- Fortnox maps invoices to `invoice`, archive to `archive`, inbox to `inbox`, and supplier-invoice, voucher, article and asset file connections to `connectfile`. Its published scope table does **not** map the separate `fileattachments` API. Do not assume `connectfile` or `invoice` grants it. Scope changes require a new authorization code; the company also needs the applicable resource license. [Scope table](https://www.fortnox.se/developer/guides-and-good-to-know/scopes).
- For customer invoice attachments, Fortnox support specifies **PDF only**, at most **20 Mb** of linked files included per document, and at most **50** included files. These are documented product limits, not independently verified API validation limits. Its Plus guide lists Offer/Order, Invoicing Standard or Invoicing Plus as qualifying licenses. [Limits](https://support.fortnox.se/produkthjalp/fakturering-plus/bilagor-for-order-offert-och-kundfaktura#viktiga-parametrar), [Standard guide](https://support.fortnox.se/produkthjalp/fakturering-standard/bilagor-for-kundfaktura-i-fakturering-standard#viktiga-parametrar).
- The separate print-service attachment setup requires Archive licensing and specifies PDF, JPG images and portrait orientation. It is not evidence that the per-invoice API attachment workflow works for that service. [Print service](https://support.fortnox.se/produkthjalp/fakturering-plus/utskriftstjanst-for-kundfakturor#bilagor-till-fakturorna).

## Access and verification

The live API reference was reachable and contained the attachment path; the checked-in snapshot was inspected rather than refreshed. Authenticated read-only archive, inbox, article file connection, price list, print template and profile calls succeeded. An attachment lookup for entity ID `0` and type `F` also returned an empty list; this does not confirm that `F` identifies a customer invoice. Asset types returned a missing-license error. No uploads or recipient deliveries were performed. Fortnox should confirm the attachment API's scope, invoice `entityType`/`entityId`, upload-to-`fileId` mapping, and channel-specific delivery behavior; then test with a non-production invoice and controlled recipient.

## This MCP server

- The server requests `invoice`, `archive`, `inbox`, and `connectfile` in its [Fortnox OAuth scope list](../src/auth/credentials.ts#L83). Existing tokens need fresh authorization to gain the added scopes; enabled integration permissions do not themselves add scopes to a token. The attachment API's required scope remains unconfirmed.
- The server provides dedicated inbox, file connection, and entity attachment tools as well as generic catalog operations. The attachment tools do not establish a customer-invoice workflow; the mappings and delivery behavior above remain unconfirmed. [Tools](../src/tools/api.ts), [catalog](../src/generated/fortnoxApiOperations.ts#L2014).
- The generic multipart uploader accepts base64 or local stdio file paths without an MCP file-size limit. Fortnox and the deployment may impose limits. [Uploader](../src/tools/api.ts#L243).
- A connected MCP instance may be running a different version of the server; verify that its tool list includes the generic API tools before relying on them.
