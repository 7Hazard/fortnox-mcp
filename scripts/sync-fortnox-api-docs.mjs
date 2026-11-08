import { writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const outputPath = resolve(root, "fortnox_docs", "fortnox_api.json");
const url = "https://apps.fortnox.se/apidocs";

function extractJsonObject(source, start) {
  let depth = 0;
  let inString = false;
  let escaped = false;

  for (let index = start; index < source.length; index += 1) {
    const character = source[index];
    if (inString) {
      if (escaped) {
        escaped = false;
      } else if (character === "\\") {
        escaped = true;
      } else if (character === '"') {
        inString = false;
      }
      continue;
    }

    if (character === '"') {
      inString = true;
    } else if (character === "{" || character === "[") {
      depth += 1;
    } else if (character === "}" || character === "]") {
      depth -= 1;
      if (depth === 0) return source.slice(start, index + 1);
    }
  }

  throw new Error(
    "Could not locate the end of Fortnox's embedded OpenAPI JSON.",
  );
}

const response = await fetch(url, { signal: AbortSignal.timeout(30000) });
if (!response.ok) {
  throw new Error(`Fortnox API docs returned HTTP ${response.status}.`);
}

const html = await response.text();
const marker = "const __redoc_state =";
const markerIndex = html.indexOf(marker);
if (markerIndex === -1) {
  throw new Error(
    "Fortnox API docs no longer contain the expected embedded spec.",
  );
}

const objectStart = html.indexOf("{", markerIndex + marker.length);
if (objectStart === -1) {
  throw new Error("Could not find Fortnox's embedded OpenAPI JSON.");
}

const state = JSON.parse(extractJsonObject(html, objectStart));
const spec = state?.spec?.data;
if (
  typeof spec?.openapi !== "string" ||
  !spec.openapi.startsWith("3.") ||
  typeof spec.paths !== "object" ||
  Object.keys(spec.paths).length === 0
) {
  throw new Error(
    "Fortnox's embedded document is not a valid OpenAPI specification.",
  );
}

writeFileSync(outputPath, `${JSON.stringify(spec, null, 2)}\n`);
const operationCount = Object.values(spec.paths).reduce(
  (count, pathItem) =>
    count +
    Object.keys(pathItem).filter((method) =>
      ["get", "post", "put", "patch", "delete"].includes(method),
    ).length,
  0,
);
console.log(
  `Synced ${Object.keys(spec.paths).length} paths and ${operationCount} operations from ${url}.`,
);
