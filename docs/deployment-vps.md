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
chmod +x infra/deploy/init-prod-env.sh
./infra/deploy/init-prod-env.sh
```

This script is idempotent:

- it creates `infra/deploy/.env.prod` if missing
- it preserves existing secrets
- it only generates missing passwords and JWT secrets once

Then open the file and review the deployment values:

- `APP_DOMAIN`
- `API_DOMAIN`
- `APP_ORIGIN`

## 4. Start the stack

```bash
chmod +x infra/deploy/deploy.sh
./infra/deploy/deploy.sh
```

The deploy script:

- ensures `infra/deploy/.env.prod` exists
- fills any missing required variables
- enables HTTPS automatically when a certificate exists in `/etc/letsencrypt/live/<APP_DOMAIN>/`

## 5. TLS and DNS

Before public launch:

- Point `cloud.sauroraa.be` and `api.cloud.sauroraa.be` to the VPS IP
- Request a Let's Encrypt certificate for `cloud.sauroraa.be`
- Re-run `./infra/deploy/deploy.sh` to switch Nginx to HTTPS automatically

Optional but recommended after the first certificate issuance:

```bash
chmod +x infra/deploy/install-certbot-renew-hook.sh
sudo ./infra/deploy/install-certbot-renew-hook.sh
```

That hook redeploys the Nginx container after future certificate renewals.

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
