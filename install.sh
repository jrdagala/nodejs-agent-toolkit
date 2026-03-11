#!/usr/bin/env bash

# Exit immediately if a pipeline, which may consist of a single simple command,
# a list, or a compound command returns a non-zero status
set -e

echo "=> Downloading nodejs-agent-toolkit from main branch..."
curl -sL https://github.com/jrdagala/nodejs-agent-toolkit/archive/refs/heads/main.tar.gz -o toolkit.tar.gz

echo "=> Extracting agent contents to the current directory..."
# Strip the repo wrapper folder and the 'agents' folder (2 components)
tar -xzf toolkit.tar.gz --strip-components=2 "nodejs-agent-toolkit-main/agents"

echo "=> Cleaning up tarball..."
rm toolkit.tar.gz

echo ""
echo "=> Successfully installed nodejs-agent-toolkit!"
echo "=> Installed: .claude, .cursor, .agent, agent-scripts, .cursorrules"
