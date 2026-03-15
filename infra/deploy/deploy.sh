#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"

cd "$ROOT_DIR/infra"
docker compose --env-file deploy/.env.prod -f docker-compose.prod.yml up -d --build

echo "SauroraaCloud stack deployed."
