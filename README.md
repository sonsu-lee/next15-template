# Next Template

Opinionated Next.js template for React applications that need strict typing,
typed styling, accessible primitives, fast local checks, and CI-ready defaults.

The template keeps the runtime surface small and pushes quality checks into
tooling: TypeScript, StyleX, Base UI, Oxlint, Oxfmt, Vitest, Renovate, and
GitHub Actions.

## What Is Included

- Next.js 16 App Router
- React 19 with React Compiler enabled
- TypeScript strict mode and Next.js typed routes
- Base UI unstyled accessibility primitives
- StyleX with Babel, PostCSS, Vitest, and lint integration
- Oxlint with type-aware rules, StyleX lint rules, and zero-warning CI
- Oxfmt for formatting
- Vitest with React Testing Library and `jsdom`
- Renovate with pinned dependency ranges
- GitHub Actions CI for format, lint, typecheck, test, and build

## Requirements

- Node.js `>=24.11.0 <25`
- pnpm `>=10.33.2 <11`

The package manager is pinned in `package.json`. Enable Corepack before
installing dependencies:

```bash
corepack enable
corepack prepare pnpm@10.33.2 --activate
```

## Quick Start

Install dependencies:

```bash
pnpm install
```

Start the development server:

```bash
pnpm dev
```

Open `http://localhost:3000`.

## Using This Template

After creating a project from this template:

1. Rename the package in `package.json`.
2. Update application metadata in `src/app/layout.tsx`.
3. Replace the starter page in `src/app/page.tsx`.
4. Document required environment variables in `.env.example`.
5. Keep `packageManager` and `engines` aligned with the selected Node.js LTS
   and pnpm versions.

`private: true` is enabled to prevent accidental package publishing. Remove it
only if the project is intentionally published to a registry.

## Scripts

| Command | Description |
| --- | --- |
| `pnpm dev` | Start the Next.js development server. |
| `pnpm build` | Build the production application. |
| `pnpm start` | Start the production server after `pnpm build`. |
| `pnpm check` | Run format, lint, typecheck, tests, and build. |
| `pnpm fmt` | Format supported files with Oxfmt. |
| `pnpm fmt:check` | Check formatting without writing changes. |
| `pnpm lint` | Run Oxlint. |
| `pnpm lint:fix` | Apply safe Oxlint fixes. |
| `pnpm lint:ci` | Run Oxlint with GitHub Actions annotations. |
| `pnpm lint:json` | Run Oxlint with machine-readable JSON output. |
| `pnpm typecheck` | Run TypeScript without emitting output. |
| `pnpm test` | Run Vitest in watch mode. |
| `pnpm test:run` | Run Vitest once. |

## Project Layout

```text
src/app/              Next.js App Router entry points
src/app/globals.css   Global CSS and StyleX layer setup
src/**/*.test.ts      Colocated unit tests
src/**/*.test.tsx     Colocated component tests
src/__tests__/        Cross-module integration tests
next.config.ts        Next.js configuration
babel.config.js       StyleX and React Compiler Babel configuration
postcss.config.js     StyleX PostCSS integration
vitest.config.mts     Vitest, React, jsdom, and StyleX test configuration
.oxlintrc.json        Oxlint rules and StyleX ESLint plugin bridge
renovate.json         Renovate dependency update rules
.github/workflows/    CI checks
```

## Development Standards

### TypeScript

TypeScript is configured as a strict project. Keep new application code typed,
avoid `any`, and prefer explicit narrowing for conditional logic. Oxlint also
enforces `typescript/strict-boolean-expressions`.

Next.js `typedRoutes` is enabled, so route links should remain compatible with
Next.js route typing.

### Styling

Use Base UI for behavior and accessibility primitives. Use StyleX for component
styles.

Prefer the official StyleX namespace import:

```tsx
import * as stylex from "@stylexjs/stylex";
```

Apply styles by spreading `stylex.props(...)` onto host elements:

```tsx
<div {...stylex.props(styles.root, isActive && styles.active)} />
```

StyleX merges styles from left to right. Put stronger local overrides later in
the argument list.

Keep `src/app/globals.css` limited to browser defaults, font setup, and StyleX
layer configuration. Component-level styling should live with the component.

### Testing

Vitest is configured with:

- `jsdom` for DOM and browser API mocking
- React Testing Library setup in `vitest.setup.ts`
- `@testing-library/jest-dom` matchers
- `@testing-library/user-event` for user interactions
- StyleX support through the Rollup plugin
- Next.js environment loading through `@next/env`

Use `pnpm test` while developing and `pnpm test:run` for one-shot local or CI
runs.

Vitest discovers `*.test.*` and `*.spec.*` files by default. Keep tests close to
the code they exercise unless the test crosses module or workflow boundaries:

| Test type | Location | Example |
| --- | --- | --- |
| Unit | Colocated with pure logic | `src/lib/format-stack-label.test.ts` |
| Component | Colocated with the component or route | `src/app/page.test.tsx` |
| Integration | Centralized under `src/__tests__/` | `src/__tests__/home-popover.integration.test.tsx` |

Use Testing Library queries such as `screen.getByRole` or `screen.getByText`
instead of DOM implementation details. Use `userEvent` for interactions.

End-to-end tests are not included in this template. Add a dedicated browser
runner, such as Playwright, before introducing an `e2e/` test suite.

### Environment Variables

No environment variables are required by default.

Use `.env.example` to document required variables with safe sample values. Local
developer overrides belong in `.env.local`, which is ignored by git.

Follow the Next.js environment model:

- Server-only variables are read from `process.env`.
- Browser-exposed variables must use the `NEXT_PUBLIC_` prefix.
- Do not define `NODE_ENV` in env files. Next.js and test runners set it.
- Test tooling loads env files through `@next/env` so non-Next processes follow
  the same resolution behavior where appropriate.

## Quality Gate

Before committing application or configuration changes, run:

```bash
pnpm check
```

`pnpm check` runs the local checks in this order:

1. `pnpm fmt:check`
2. `pnpm lint`
3. `pnpm typecheck`
4. `pnpm test:run`
5. `pnpm build`

CI runs the same checks as separate GitHub Actions steps so failures are easier
to diagnose.

## Dependency Updates

Dependencies are pinned instead of using loose semver ranges. Renovate is
configured to update the lockfile and group only tightly related packages, such
as Next.js/React, StyleX packages, and Oxlint packages.

Review dependency update PRs with the same `pnpm check` gate used for normal
application changes.

## Deployment

Build the application before deployment:

```bash
pnpm build
```

For a Node.js runtime deployment, start the built app with:

```bash
pnpm start
```

Configure production environment variables in the deployment platform rather
than committing secret values to the repository.

## Agent Notes

Project instructions for coding agents live in:

- `AGENTS.md` for Codex
- `CLAUDE.md` for Claude Code

Keep implementation guidance in those files and keep this README focused on
human-facing setup, workflow, and maintenance information.
