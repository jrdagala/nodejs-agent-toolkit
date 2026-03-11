# nodejs-agent-toolkit

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

An optimized AI agent harness strictly tuned for Node.js, TypeScript, and modern web development. Inspired by the Everything Claude Code system.

## Overview

The `nodejs-agent-toolkit` is designed to provide unified and structured agentic development environments out of the box. Rather than configuring rules for every new project, this toolkit enforces tested patterns (TDD, immutable structures, architectural review) across multiple popular AI assistants including Cursor, Claude Code, and generic CLI agents.

## Features

- **Multi-Agent Compatibility:** Seamlessly load customized profiles and rules into `.claude`, `.cursor` (via `.mdc` files and `.cursorrules`), and generic `.agent` structures.
- **Pre-configured Personas:** Ready-to-use personas such as `planner`, `architect`, `tdd-guide`, `security-reviewer`, and `build-error-resolver`.
- **Built-in Scripts:** Interactive setup scripts for managing environment states (like package manager preferences).

## Getting Started

Because AI capabilities sit right alongside your code, there is no global daemon to run. This toolkit installs its rules natively into your target repository.

### Option 1: NPX (Recommended)
If you have node installed, you can initialize the toolkit's logic natively into your project root:

```bash
npx nodejs-agent-toolkit init
```

### Option 2: Curl via Bash
If you don't use node, you can extract the tarball via curl. Run this directly from your target project's root directory:

```bash
curl -sL https://github.com/jrdagala/nodejs-agent-toolkit/raw/main/install.sh | bash
```

2. **Setup your package manager preference:**
   Run the interactive script to ensure the agents run the correct install/execution commands for your environment:

   ```bash
   node agents/agent-scripts/setup-package-manager.js --detect
   # To set it globally (e.g., using pnpm):
   node agents/agent-scripts/setup-package-manager.js --global pnpm
   ```

3. **Install dependencies:**
   ```bash
   npm install # (Or use pnpm, yarn, bun)
   ```

## Toolkit Structure

The `agents/` directory is the core of this toolkit, housing the multi-agent configurations:

- **`agents/.claude/`**: Specific prompts, commands, and rules tailored for Anthropic's Claude Code CLI.
- **`agents/.cursor/`**: Settings formulated for the Cursor IDE.
  - Contains `rules/*.mdc` which selectively load based on the context of your chat prompts (e.g. asking for architecture advice loads `architect.mdc`).
  - Contains the global `agents/.cursorrules` applied to all queries.
- **`agents/.agent/`**: The generic AI agent profiles formatted into standard `/skills/` and `/workflows/` (compatible with systems using `SKILL.md` mappings).
- **`agents/agent-scripts/`**: Executable helper scripts that enforce rules, hook into git, or handle dynamic settings (like `setup-package-manager.js`).

### `setup-package-manager.js` Utility

This utility ensures your AI agents do not accidentally mix package managers (e.g. running `npm install` in a `bun` repository).
It writes to `~/.claude/package-manager.json` (global) or `.claude/package-manager.json` (project).

- Use `--list` to see available managers.
- Use `--project [name]` to enforce a manager for this specific project.

## Creating New Skills or Rules

- **Skills:** Add a new directory under `agents/.agent/skills/` containing a `SKILL.md` with YAML frontmatter specifying the name, description, and dependencies.
- **Rules:** Add markdown logic to `agents/.agent/rules/`. For Cursor, ensure you also map it to a `.mdc` file inside `agents/.cursor/rules/` specifying the relative `globs:`.

## Contributing

Contributions are welcome! Please ensure any new features or rule structures maintain the integrity of our documentation and design process. Include tests where applicable.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
