import type { FastifyInstance } from "fastify";

export async function registerHealthRoutes(app: FastifyInstance) {
  app.get("/", async () => ({
    status: "healthy",
    timestamp: new Date().toISOString()
  }));

  app.get("/ready", async () => ({
    status: "ready",
    services: {
      api: "up",
      database: "pending",
      redis: "pending"
    }
  }));
}

