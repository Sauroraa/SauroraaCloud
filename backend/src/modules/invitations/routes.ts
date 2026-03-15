import type { FastifyInstance } from "fastify";

const invitations = [
  {
    id: "inv_01",
    email: "ops.lead@sauroraa.internal",
    role: "manager",
    scope: "operations-core",
    status: "pending",
    expiresAt: "2026-03-18T18:00:00.000Z"
  },
  {
    id: "inv_02",
    email: "finance.analyst@sauroraa.internal",
    role: "collaborator",
    scope: "finance",
    status: "approved",
    expiresAt: "2026-03-16T18:00:00.000Z"
  }
];

export async function registerInvitationRoutes(app: FastifyInstance) {
  app.get("/", async () => ({
    items: invitations
  }));

  app.post("/", async () => ({
    message: "Invitation creation flow is scaffolded and ready for persistence."
  }));
}

