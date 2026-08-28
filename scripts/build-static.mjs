#!/usr/bin/env node
// Builds a fully static export of the site (no Node.js server required) so it
// can be uploaded to classic PHP/Apache hosting. The contact form posts
// directly to contact.php in that case. Output ends up in ./dist.
import { execFileSync } from "node:child_process";
import { existsSync, rmSync, cpSync, renameSync } from "node:fs";
import { join } from "node:path";

const root = join(import.meta.dirname, "..");
const apiDir = join(root, "app", "api");
const apiBackup = join(root, "app", "_api-backup");
const outDir = join(root, "out");
const distDir = join(root, "dist");

function moveApiAway() {
  if (existsSync(apiDir)) renameSync(apiDir, apiBackup);
}

function restoreApi() {
  if (existsSync(apiBackup)) renameSync(apiBackup, apiDir);
}

try {
  moveApiAway();
  execFileSync("npx", ["next", "build"], {
    cwd: root,
    stdio: "inherit",
    env: {
      ...process.env,
      STATIC_EXPORT: "true",
      NEXT_PUBLIC_CONTACT_ENDPOINT: "/contact.php",
    },
  });
} finally {
  restoreApi();
}

if (!existsSync(outDir)) {
  console.error("Static export did not produce an `out` directory.");
  process.exit(1);
}

if (existsSync(distDir)) rmSync(distDir, { recursive: true, force: true });
cpSync(outDir, distDir, { recursive: true });
rmSync(outDir, { recursive: true, force: true });

console.log(`\nStatic site ready at: ${distDir}`);
