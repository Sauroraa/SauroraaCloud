#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"
HOOK_DIR="/etc/letsencrypt/renewal-hooks/deploy"
HOOK_FILE="$HOOK_DIR/sauroraacloud-redeploy.sh"

mkdir -p "$HOOK_DIR"

cat > "$HOOK_FILE" <<EOF
#!/usr/bin/env bash
set -euo pipefail
cd "$ROOT_DIR"
./infra/deploy/deploy.sh
EOF

chmod +x "$HOOK_FILE"

echo "Installed Certbot deploy hook at $HOOK_FILE"
echo "Nginx will be redeployed automatically after certificate renewal."

