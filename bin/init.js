#!/usr/bin/env node

const fs = require("node:fs");
const path = require("node:path");

const targetDir = process.cwd();
const sourceDir = path.join(__dirname, "..", "agents");

console.log("=> Initializing nodejs-agent-toolkit directly into:", targetDir);

try {
  // Read all items inside the packaged /agents directory
  const items = fs.readdirSync(sourceDir);

  for (const item of items) {
    const srcPath = path.join(sourceDir, item);
    const destPath = path.join(targetDir, item);

    // Recursively copy each file or folder seamlessly into the user project root
    fs.cpSync(srcPath, destPath, { recursive: true, force: true });
    console.log(`=> Copied ${item}`);
  }

  console.log("\n=> Successfully installed nodejs-agent-toolkit profiles!");
} catch (error) {
  console.error("=> Failed to install toolkit files:", error);
  process.exit(1);
}
