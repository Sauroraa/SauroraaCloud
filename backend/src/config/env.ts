import { z } from "zod";

const envSchema = z.object({
  NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
  PORT: z.coerce.number().default(3000),
  APP_ORIGIN: z.string().default("http://localhost:5173"),
  DB_HOST: z.string().default("mariadb"),
  DB_PORT: z.coerce.number().default(3306),
  DB_NAME: z.string().default("sauroraacloud"),
  DB_USER: z.string().default("sauroraa"),
  DB_PASSWORD: z.string().default("change-me"),
  REDIS_URL: z.string().default("redis://redis:6379")
});

export const env = envSchema.parse(process.env);

