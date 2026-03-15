# SauroraaCloud

Private company operating system built as an invitation-only cloud for secure collaboration, document control, and operational visibility.

## Workspace

- `frontend/` React + TypeScript + Vite app shell
- `backend/` Fastify + TypeScript API foundation
- `infra/` Docker Compose and Nginx baseline
- `docs/` Product and architecture references

## Current Focus

This repository contains the foundation for the MVP described in `docs/product-foundation.md`:

- invitation-first identity model
- company dashboard shell
- workspaces and drive-oriented information architecture
- Docker-first deployment for Debian 12

## Quick Start

### Local

1. Install dependencies in `frontend/` and `backend/`
2. Copy `backend/.env.example` to `backend/.env`
3. Run the frontend and backend locally

### VPS Deployment

Production deployment assets are in `infra/deploy/`:

- `bootstrap-vps.sh` prepares a Debian 12 host
- `deploy.sh` updates the app and restarts the stack
- `.env.prod.example` contains the required runtime variables

Follow `docs/deployment-vps.md` for the full setup.

## Next Steps

1. Install dependencies in `frontend/` and `backend/`
2. Connect the API to MariaDB and Redis
3. Implement auth, invitations, storage, and audit logging
4. Deploy via `infra/docker-compose.yml`
