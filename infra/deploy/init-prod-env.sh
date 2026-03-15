#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"
ENV_TEMPLATE="$ROOT_DIR/infra/deploy/.env.prod.example"
ENV_FILE="$ROOT_DIR/infra/deploy/.env.prod"

generate_secret() {
  local length="${1:-48}"
  tr -dc 'A-Za-z0-9' < /dev/urandom | head -c "$length"
}

set_key() {
  local key="$1"
  local value="$2"

  if grep -q "^${key}=" "$ENV_FILE"; then
    sed -i "s|^${key}=.*$|${key}=${value}|" "$ENV_FILE"
  else
    printf "%s=%s\n" "$key" "$value" >> "$ENV_FILE"
  fi
}

ensure_key() {
  local key="$1"
  local fallback="$2"
  local current

  current="$(grep "^${key}=" "$ENV_FILE" | head -n 1 | cut -d '=' -f 2- || true)"
  if [[ -z "$current" ]] || [[ "$current" == replace-with-* ]]; then
    set_key "$key" "$fallback"
  fi
}

if [[ ! -f "$ENV_TEMPLATE" ]]; then
  echo "Template not found: $ENV_TEMPLATE" >&2
  exit 1
fi

if [[ ! -f "$ENV_FILE" ]]; then
  cp "$ENV_TEMPLATE" "$ENV_FILE"
fi

ensure_key "NODE_ENV" "production"
ensure_key "PORT" "3000"
ensure_key "APP_ORIGIN" "https://cloud.sauroraa.be"
ensure_key "APP_DOMAIN" "cloud.sauroraa.be"
ensure_key "API_DOMAIN" "api.cloud.sauroraa.be"
ensure_key "DB_HOST" "mariadb"
ensure_key "DB_PORT" "3306"
ensure_key "DB_NAME" "sauroraacloud"
ensure_key "DB_USER" "sauroraa"
ensure_key "REDIS_URL" "redis://redis:6379"
ensure_key "DB_PASSWORD" "$(generate_secret 32)"
ensure_key "DB_ROOT_PASSWORD" "$(generate_secret 40)"
ensure_key "JWT_ACCESS_SECRET" "$(generate_secret 64)"
ensure_key "JWT_REFRESH_SECRET" "$(generate_secret 64)"

echo "Production env is ready at $ENV_FILE."
echo "Generated missing secrets once and preserved existing ones."
echo "Review these values before public launch:"
echo "  APP_ORIGIN"
echo "  APP_DOMAIN"
echo "  API_DOMAIN"
