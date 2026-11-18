# Fortnox company card transactions API

Researched 2026-11-18. **Conclusion:** No supported API for reading Fortnox Företagskort purchases, reserved transactions, or preliminary bookkeeping was identified in the sources checked. This is absence of evidence, not proof that no public or partner-restricted API exists. No endpoint, scope, permission, or API status values for those records could be confirmed.

## Confirmed product behavior

- Fortnox displays purchases in an overview, connects receipts to transactions, and describes automatic bookkeeping after receipt processing. Its card is offered with Mynt. These are product capabilities, not API guarantees. [Fortnox Företagskort](https://www.fortnox.se/produkt/fortnox-foretagskort).
- In the approval workflow, a reserved transaction is submitted for approval once its reservation releases; an approved receipt is then bookkept. Reserved transactions do not receive missing-receipt reminders. Neither statement specifies an API status or preliminary bookkeeping representation. [Approval](https://support.fortnox.se/produkthjalp/foretagskort/attestera-kop-med-fortnox-foretagskort), [reminders](https://support.fortnox.se/produkthjalp/foretagskort/kom-igang-med-fortnox-foretagskort#paminnelsenotiser-for-kortanvandarna).

## Catalog evidence

On 2026-11-18 the embedded OpenAPI document in the [live Fortnox reference](https://apps.fortnox.se/apidocs) and the [bundled snapshot](../fortnox_docs/fortnox_api.json) each contained 285 paths and 451 HTTP method/path pairs, with none added or removed. The full documents were not identical: 11 operation definitions differed. This comparison does not establish that undocumented or partner-only catalogs do not exist.

- The catalog contains a [bank-feed transaction schema](../fortnox_docs/fortnox_api.json#L26737) with `cardID`, `status`, payment and settlement dates, and amounts. `status` is an unconstrained string, with no documented values. No catalog path directly references this schema; the schema alone establishes neither a readable endpoint nor a connection to Företagskort.
- `GET /3/vouchers` and `GET /3/vouchers/{VoucherSeries}/{VoucherNumber}` retrieve vouchers, identified by series, number and financial year. The [scope table](https://www.fortnox.se/developer/guides-and-good-to-know/scopes) maps vouchers to `bookkeeping`, requiring Bokföring or Kundfaktura licensing. These endpoints may expose actual vouchers, but the documentation checked does not establish that reserved purchases or preliminary bookkeeping appear there, nor that all purchases produce retrievable vouchers. [Voucher operations](../fortnox_docs/fortnox_api.json#L48556).
- `GET /3/expenses` retrieves expense **codes**, not a documented card-purchase feed; its scope is `salary` and the listed license is Lön. [Operation](../fortnox_docs/fortnox_api.json#L35657), [scopes](https://www.fortnox.se/developer/guides-and-good-to-know/scopes).
- `GET /api/bank-process-orders/v1` lists orders, while its related documents include company registration documents. It is not documented as a card transaction feed. [Bank-process operations](../fortnox_docs/fortnox_api.json#L49404).

## Access and next step

The published scope table does not identify a Företagskort transaction resource. Fortnox says tokens are limited to granted scopes, scopes provide both read and write access, scope additions require a new authorization code, and the company needs the relevant license. Product UI administrator permissions are not evidence of API permission. [Scopes](https://www.fortnox.se/developer/guides-and-good-to-know/scopes), [card setup](https://support.fortnox.se/produkthjalp/foretagskort/kom-igang-med-fortnox-foretagskort).

No authenticated transaction or voucher calls were made; availability, returned records, and any partner restrictions were not tested. Ask [Fortnox developer support](https://www.fortnox.se/developer/support) whether a supported public or partner-only API exists for this card, including exact endpoint, onboarding and permissions, OAuth scopes and licenses, reserved/settled status values, and whether preliminary or finalized accounting entries can be read and correlated to the purchase. Do not rely on undocumented UI endpoints or infer Mynt API access from the partnership.