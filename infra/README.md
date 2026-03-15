# Infrastructure Baseline

This stack is designed for a Debian 12 host running Docker Engine and the Compose plugin.

## Services

- `nginx`: reverse proxy and security headers
- `frontend`: static React application
- `api`: Fastify TypeScript backend
- `mariadb`: primary relational database
- `redis`: cache and future queue backbone

## Deployment Notes

- Keep database and Redis on the internal network only
- Replace example secrets before production
- Add TLS termination and Let's Encrypt before internet exposure
- Mount persistent backup targets before enabling scheduled dumps
