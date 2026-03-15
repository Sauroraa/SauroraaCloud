# VPS Deployment Guide

This guide targets a fresh Debian 12 VPS for the first production-style deployment of SauroraaCloud.

## 1. Prepare the server

Log in as a sudo user, then copy `infra/deploy/bootstrap-vps.sh` to the server and run it:

```bash
sudo bash bootstrap-vps.sh
```

This script installs:

- Docker Engine
- Docker Compose plugin
- Git
- Nginx
- UFW
- Fail2ban

## 2. Clone the repository

```bash
sudo mkdir -p /opt/sauroraacloud
sudo chown "$USER":"$USER" /opt/sauroraacloud
cd /opt/sauroraacloud
git clone https://github.com/Sauroraa/SauroraaCloud.git app
cd app
```

## 3. Configure production variables

```bash
cp infra/deploy/.env.prod.example infra/deploy/.env.prod
```

Set strong secrets before starting the stack:

- `APP_DOMAIN`
- `API_DOMAIN`
- `DB_PASSWORD`
- `DB_ROOT_PASSWORD`
- `JWT_ACCESS_SECRET`
- `JWT_REFRESH_SECRET`

## 4. Start the stack

```bash
chmod +x infra/deploy/deploy.sh
./infra/deploy/deploy.sh
```

## 5. TLS and DNS

Before public launch:

- Point `cloud.sauroraa.com` and `api.cloud.sauroraa.com` to the VPS IP
- Replace the HTTP-only Nginx config with TLS termination
- Add Let's Encrypt certificates or your existing certificate chain

## 6. Operations

Useful commands:

```bash
docker compose --env-file infra/deploy/.env.prod -f infra/docker-compose.prod.yml ps
docker compose --env-file infra/deploy/.env.prod -f infra/docker-compose.prod.yml logs -f
docker compose --env-file infra/deploy/.env.prod -f infra/docker-compose.prod.yml pull
```

## Notes

- The current stack is a clean production baseline, not a finished SaaS platform
- MariaDB and Redis stay on the internal Docker network only
- Backups, TLS automation, and object storage should be added before sensitive production usage

