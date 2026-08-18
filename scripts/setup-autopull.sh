#!/usr/bin/env bash
# One-time setup (macOS only): installs a launchd job that polls origin/main every
# 15 minutes. When it finds a new commit it runs pull-and-update.sh and restarts
# the dev server on :5173. Run once, from anywhere inside the repo:
#
#   ./scripts/setup-autopull.sh
set -euo pipefail
REPO_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
LABEL="com.studygroupadmin.autopull"
PLIST="$HOME/Library/LaunchAgents/$LABEL.plist"

mkdir -p "$HOME/Library/LaunchAgents"

cat > "$PLIST" <<PLIST_EOF
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
	<key>Label</key>
	<string>$LABEL</string>

	<key>ProgramArguments</key>
	<array>
		<string>/bin/bash</string>
		<string>$REPO_DIR/scripts/auto-pull-watch.sh</string>
	</array>

	<key>StartInterval</key>
	<integer>900</integer>

	<key>RunAtLoad</key>
	<true/>

	<key>EnvironmentVariables</key>
	<dict>
		<key>PATH</key>
		<string>/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin</string>
	</dict>

	<key>StandardOutPath</key>
	<string>$REPO_DIR/scripts/launchd.log</string>
	<key>StandardErrorPath</key>
	<string>$REPO_DIR/scripts/launchd.log</string>
</dict>
</plist>
PLIST_EOF

launchctl bootout "gui/$(id -u)/$LABEL" >/dev/null 2>&1 || true
launchctl bootstrap "gui/$(id -u)" "$PLIST"

echo "Installed and started: $LABEL"
echo "Polls origin/main every 15 minutes. On a new commit it runs pull-and-update.sh"
echo "and restarts the dev server. Logs land in $REPO_DIR/scripts/*.log"
echo
echo "IMPORTANT — macOS Full Disk Access:"
echo "If this repo lives under ~/Downloads, ~/Documents, ~/Desktop, or iCloud Drive,"
echo "macOS blocks the background job with 'Operation not permitted' until you grant"
echo "Full Disk Access to /bin/bash:"
echo "  System Settings -> Privacy & Security -> Full Disk Access -> + -> add /bin/bash"
echo
echo "Check status:     launchctl list | grep $LABEL"
echo "Trigger a run now: launchctl kickstart -k gui/\$(id -u)/$LABEL"
echo "Remove it:         launchctl bootout gui/\$(id -u)/$LABEL && rm '$PLIST'"
