# SauroraaCloud Product Foundation

## Product Thesis

SauroraaCloud is not positioned as a generic file sync tool. It is a private company operating system designed around a single, premium, invitation-only entry point for internal operations.

## MVP Scope

The first release focuses on seven native modules:

1. Invitation-only authentication
2. Company drive
3. Workspaces
4. Company vault
5. Enterprise dashboard
6. Lightweight internal messaging and activity
7. Admin console

## Experience Principles

- Premium, high-trust interface with a clear hierarchy
- No public sign-up or plugin marketplace
- Navigation depth capped at three levels
- Global search and primary actions remain visible
- Security and auditability are part of the core UX

## Technical Direction

### Frontend

- React + TypeScript + Vite
- Tailwind CSS
- React Router
- Domain-oriented feature structure

### Backend

- Fastify + TypeScript
- Modular route registration by business domain
- REST-first API with room for WebSocket features

### Infrastructure

- Debian 12 host
- Docker Compose orchestration
- Nginx reverse proxy
- MariaDB + Redis

## Domain Model

Core entities for the MVP:

- `companies`
- `users`
- `invitations`
- `roles`
- `spaces`
- `space_members`
- `files`
- `file_versions`
- `shares`
- `activities`
- `notifications`
- `audit_logs`

## Delivery Strategy

### Phase 1

- Auth, invitations, roles
- Dashboard shell
- Workspaces CRUD
- Drive upload and sharing model
- Minimal admin console

### Phase 2

- Comments and activity feed
- Realtime notifications
- Notes and knowledge base
- Search, tags, trash, versioning

### Phase 3

- Clients and projects
- HR and legal vault
- Validation workflows

## Frontend Information Architecture

Top-level navigation:

- Dashboard
- Workspaces
- Drive
- Vault
- Activity
- Admin

Shared layout zones:

- fixed left navigation
- top command bar with search
- contextual page header
- modular content cards

## Backend Bounded Contexts

- `auth`
- `users`
- `invitations`
- `spaces`
- `files`
- `sharing`
- `activities`
- `notifications`
- `audit`
- `admin`

## Security Baseline

- HTTPS-only deployment
- Argon2 for password hashing
- refresh token rotation
- MFA-ready user model
- audit logs for sensitive actions
- MIME validation on uploads
- rate limiting and security headers
- admin access hardening
