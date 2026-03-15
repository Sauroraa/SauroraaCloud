#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"
ENV_FILE="$ROOT_DIR/infra/deploy/.env.prod"
HTTP_TEMPLATE="$ROOT_DIR/infra/nginx/http.conf.template"
HTTPS_TEMPLATE="$ROOT_DIR/infra/nginx/https.conf.template"
GENERATED_DIR="$ROOT_DIR/infra/nginx/generated"
GENERATED_CONF="$GENERATED_DIR/default.conf"

chmod +x "$ROOT_DIR/infra/deploy/init-prod-env.sh"
"$ROOT_DIR/infra/deploy/init-prod-env.sh" >/dev/null

set -a
source "$ENV_FILE"
set +a

mkdir -p "$GENERATED_DIR"

if [[ -f "/etc/letsencrypt/live/${APP_DOMAIN}/fullchain.pem" ]] && [[ -f "/etc/letsencrypt/live/${APP_DOMAIN}/privkey.pem" ]]; then
  sed "s|__APP_DOMAIN__|${APP_DOMAIN}|g" "$HTTPS_TEMPLATE" > "$GENERATED_CONF"
  echo "Using HTTPS Nginx configuration for ${APP_DOMAIN}."
else
  sed "s|__APP_DOMAIN__|${APP_DOMAIN}|g" "$HTTP_TEMPLATE" > "$GENERATED_CONF"
  echo "Certificate not found for ${APP_DOMAIN}; using HTTP-only Nginx configuration."
fi

cd "$ROOT_DIR/infra"
docker compose --env-file deploy/.env.prod -f docker-compose.prod.yml up -d --build

echo "SauroraaCloud stack deployed."
