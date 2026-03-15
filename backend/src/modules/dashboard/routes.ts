import type { FastifyInstance } from "fastify";

export async function registerDashboardRoutes(app: FastifyInstance) {
  app.get("/summary", async () => ({
    company: "SauroraaCloud Demo",
    metrics: {
      activeMembers: 142,
      protectedFiles: 18412,
      liveWorkspaces: 27,
      pendingInvitations: 9
    },
    highlights: [
      "March governance pack uploaded to Board Room vault.",
      "Finance workspace is nearing protected storage quota.",
      "Three client spaces require legal share review."
    ]
  }));
}

