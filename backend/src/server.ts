import cors from "@fastify/cors";
import helmet from "@fastify/helmet";
import rateLimit from "@fastify/rate-limit";
import Fastify from "fastify";

import { registerRoutes } from "./modules/register-routes.js";

export function buildApp() {
  const app = Fastify({
    logger: true
  });

  void app.register(cors, {
    origin: true,
    credentials: true
  });

  void app.register(helmet, {
    global: true
  });

  void app.register(rateLimit, {
    max: 100,
    timeWindow: "1 minute"
  });

  registerRoutes(app);

  return app;
}
