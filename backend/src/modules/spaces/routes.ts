import type { FastifyInstance } from "fastify";

const spaces = [
  {
    id: "space_exec",
    name: "Board Room",
    type: "executive",
    members: 6,
    visibility: "restricted"
  },
  {
    id: "space_ops",
    name: "Operations Core",
    type: "department",
    members: 21,
    visibility: "internal"
  },
  {
    id: "space_client",
    name: "Aster Client Vault",
    type: "client",
    members: 9,
    visibility: "restricted"
  }
];

export async function registerSpaceRoutes(app: FastifyInstance) {
  app.get("/", async () => ({
    items: spaces
  }));

  app.get("/:spaceId", async (request) => {
    const { spaceId } = request.params as { spaceId: string };
    const space = spaces.find((item) => item.id === spaceId);

    return {
      item: space ?? null
    };
  });
}

