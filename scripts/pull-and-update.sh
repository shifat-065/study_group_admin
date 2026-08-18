#!/usr/bin/env bash
# Pull the latest changes from origin/main and refresh the local dev environment.
#
# - Stashes any local edits (e.g. the test-support `export` tweaks in App.tsx) so the
#   pull can't conflict with them, then reapplies them afterward via `git stash pop`.
# - Fast-forwards only — if local main has diverged, this stops with git's own error
#   instead of merging/rebasing over local commits.
# - Reinstalls deps, re-approves npm's install-script gate, and repairs the
#   "optional dependency downloaded as metadata only, missing its native binary"
#   npm bug (https://github.com/npm/cli/issues/4828) that shows up for
#   rollup/esbuild/lightningcss/@tailwindcss-oxide on this machine.
set -euo pipefail
cd "$(git rev-parse --show-toplevel)"

STASHED=0
trap 'if [ "$STASHED" = "1" ]; then echo; echo "NOTE: local changes are stashed (run: git stash pop) — script exited before reapplying them."; fi' EXIT

echo "==> Checking for local changes"
if [ -n "$(git status --porcelain)" ]; then
  git stash push -u -m "pull-and-update: $(date +%Y%m%d-%H%M%S)"
  STASHED=1
  echo "    stashed local changes"
else
  echo "    none"
fi

echo "==> Pulling latest from origin/main"
git checkout main
git pull --ff-only origin main

if [ "$STASHED" = "1" ]; then
  echo "==> Reapplying local changes"
  if ! git stash pop; then
    echo
    echo "!! Conflict reapplying your local changes onto the new pull."
    echo "!! Resolve manually (git status / git diff), then run:"
    echo "!!   npm install && npm test"
    exit 1
  fi
  STASHED=0
fi

echo "==> Installing dependencies"
npm install

echo "==> Approving install scripts"
npm approve-scripts --all >/dev/null 2>&1 || true

echo "==> Verifying native binaries"
check_and_fix() {
  local file="$1" pkg="$2"
  if [ -f "$file" ]; then
    return
  fi
  local pkgdir="node_modules/$pkg"
  local ver=""
  if [ -f "$pkgdir/package.json" ]; then
    ver=$(node -e "console.log(require('./$pkgdir/package.json').version)" 2>/dev/null || true)
  fi
  echo "    missing $file — reinstalling ${pkg}${ver:+@$ver}"
  rm -rf "$pkgdir"
  npm install "${pkg}${ver:+@$ver}" --no-save
}
PLATFORM_ARCH=$(node -e "console.log(process.platform + '-' + process.arch)")
if [ "$PLATFORM_ARCH" = "darwin-arm64" ]; then
  check_and_fix "node_modules/@rollup/rollup-darwin-arm64/rollup.darwin-arm64.node" "@rollup/rollup-darwin-arm64"
  check_and_fix "node_modules/@esbuild/darwin-arm64/bin/esbuild" "esbuild"
  check_and_fix "node_modules/lightningcss-darwin-arm64/lightningcss.darwin-arm64.node" "lightningcss-darwin-arm64"
  check_and_fix "node_modules/@tailwindcss/oxide-darwin-arm64/tailwindcss-oxide.darwin-arm64.node" "@tailwindcss/oxide-darwin-arm64"
fi

echo "==> Running unit tests"
npm test

echo
echo "Done — local main is now at:"
git log -1 --oneline
echo
echo "Run 'npm run dev' to start the dev server."
