#!/usr/bin/env bash
# Poll origin/main; if it has moved, run pull-and-update.sh and restart the dev
# server on :5173. Meant to be invoked periodically by the launchd job in
# scripts/com.studygroupadmin.autopull.plist — not something you run by hand
# (though it's safe to: it's a no-op if there's nothing new).
set -euo pipefail
REPO_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$REPO_DIR"

LOG_FILE="$REPO_DIR/scripts/auto-pull.log"
DEV_LOG="$REPO_DIR/scripts/dev-server.log"

log() { printf '[%s] %s\n' "$(date '+%Y-%m-%d %H:%M:%S')" "$*" >>"$LOG_FILE"; }

log "checking for updates..."
if ! git fetch origin main >>"$LOG_FILE" 2>&1; then
  log "git fetch failed — skipping this run"
  exit 1
fi

LOCAL=$(git rev-parse main)
REMOTE=$(git rev-parse origin/main)

if [ "$LOCAL" = "$REMOTE" ]; then
  log "up to date ($LOCAL)"
  exit 0
fi

log "new commit(s): $LOCAL -> $REMOTE — pulling"
if ! "$REPO_DIR/scripts/pull-and-update.sh" >>"$LOG_FILE" 2>&1; then
  log "pull-and-update.sh FAILED — see above. Dev server left untouched."
  exit 1
fi

log "pull succeeded, now at $(git rev-parse main) — restarting dev server"

PORT_PID=$(lsof -ti:5173 -sTCP:LISTEN 2>/dev/null || true)
if [ -n "$PORT_PID" ]; then
  kill "$PORT_PID" 2>/dev/null || true
  sleep 1
fi
nohup npm run dev >"$DEV_LOG" 2>&1 &
disown
log "dev server restarting (pid $!) — log: $DEV_LOG"
