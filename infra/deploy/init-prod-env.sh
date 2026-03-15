#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"
ENV_TEMPLATE="$ROOT_DIR/infra/deploy/.env.prod.example"
ENV_FILE="$ROOT_DIR/infra/deploy/.env.prod"

if [[ ! -f "$ENV_TEMPLATE" ]]; then
  echo "Template not found: $ENV_TEMPLATE" >&2
  exit 1
fi

if [[ -f "$ENV_FILE" ]]; then
  echo "Production env already exists: $ENV_FILE" >&2
  echo "Delete it first if you want to regenerate secrets." >&2
  exit 1
fi

generate_secret() {
  local length="${1:-48}"
  tr -dc 'A-Za-z0-9' < /dev/urandom | head -c "$length"
}

DB_PASSWORD="$(generate_secret 32)"
DB_ROOT_PASSWORD="$(generate_secret 40)"
JWT_ACCESS_SECRET="$(generate_secret 64)"
JWT_REFRESH_SECRET="$(generate_secret 64)"

cp "$ENV_TEMPLATE" "$ENV_FILE"

sed -i "s|^DB_PASSWORD=.*$|DB_PASSWORD=${DB_PASSWORD}|" "$ENV_FILE"
sed -i "s|^DB_ROOT_PASSWORD=.*$|DB_ROOT_PASSWORD=${DB_ROOT_PASSWORD}|" "$ENV_FILE"
sed -i "s|^JWT_ACCESS_SECRET=.*$|JWT_ACCESS_SECRET=${JWT_ACCESS_SECRET}|" "$ENV_FILE"
sed -i "s|^JWT_REFRESH_SECRET=.*$|JWT_REFRESH_SECRET=${JWT_REFRESH_SECRET}|" "$ENV_FILE"

echo "Generated $ENV_FILE with fresh production secrets."
echo "Review the domain values before deployment:"
echo "  APP_ORIGIN"
echo "  APP_DOMAIN"
echo "  API_DOMAIN"

