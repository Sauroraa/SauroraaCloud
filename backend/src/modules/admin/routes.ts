import type { FastifyInstance } from "fastify";

export async function registerAdminRoutes(app: FastifyInstance) {
  app.get("/overview", async () => ({
    security: {
      mfaCoverage: 84,
      activeSessions: 163,
      flaggedEvents: 2
    },
    quotas: {
      usedGb: 412,
      availableGb: 2048
    },
    system: {
      api: "operational",
      worker: "planned",
      backups: "planned"
    }
  }));
}

