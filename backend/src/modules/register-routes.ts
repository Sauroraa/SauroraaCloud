import type { FastifyInstance } from "fastify";

import { registerAdminRoutes } from "./admin/routes.js";
import { registerDashboardRoutes } from "./dashboard/routes.js";
import { registerHealthRoutes } from "./health/routes.js";
import { registerInvitationRoutes } from "./invitations/routes.js";
import { registerSpaceRoutes } from "./spaces/routes.js";

export function registerRoutes(app: FastifyInstance) {
  app.get("/", async () => ({
    name: "SauroraaCloud API",
    status: "ok",
    modules: ["health", "dashboard", "invitations", "spaces", "admin"]
  }));

  void app.register(registerHealthRoutes, { prefix: "/health" });
  void app.register(registerDashboardRoutes, { prefix: "/dashboard" });
  void app.register(registerInvitationRoutes, { prefix: "/invitations" });
  void app.register(registerSpaceRoutes, { prefix: "/spaces" });
  void app.register(registerAdminRoutes, { prefix: "/admin" });
}

