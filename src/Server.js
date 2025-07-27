import { createServer, Model } from "miragejs";

export function makeServer() {
  return createServer({
    models: {
      van: Model,
    },

    seeds(server) {
      server.create("van", {
        id: "1",
        name: "Modest Explorer",
        price: 60,
        description: "The Modest Explorer is a van designed to get you out of the house and into nature.",
        imageUrl: "https://assets.scrimba.com/advanced-react/react-router/modest-explorer.png",
        type: "simple",
        hostId: "123",
      });

      server.create("van", {
        id: "2",
        name: "Beach Bum",
        price: 80,
        description: "Beach Bum is a van inspired by surfers and travelers.",
        imageUrl: "https://assets.scrimba.com/advanced-react/react-router/beach-bum.png",
        type: "rugged",
        hostId: "123",
      });

      server.create("van", {
        id: "3",
        name: "Reliable Red",
        price: 100,
        description: "Reliable Red is a van that was made for travelling.",
        imageUrl: "https://assets.scrimba.com/advanced-react/react-router/reliable-red.png",
        type: "luxury",
        hostId: "123",
      });

      server.create("van", {
        id: "4",
        name: "Dreamfinder",
        price: 65,
        description: "Dreamfinder is the perfect van to travel in and experience.",
        imageUrl: "https://assets.scrimba.com/advanced-react/react-router/dreamfinder.png",
        type: "simple",
        hostId: "123",
      });
    },

    routes() {
      this.namespace = "api";
      this.logging = false;

      this.get("/vans", (schema) => {
        return {
          vans: schema.vans.all().models,
        };
      });

      this.get("/vans/:id", (schema, request) => {
        const id = request.params.id;
        const van = schema.vans.find(id);
        return { van };
      });

      this.get("/host/vans", (schema) => {
        return {
          vans: schema.vans.where({ hostId: "123" }).models,
        };
      });

      this.get("/host/vans/:id", (schema, request) => {
  const id = request.params.id
  const van = schema.vans.find(id)
  if (van?.hostId === "123") {
    return { van }
  } else {
    return new Response(404, {}, { error: "Van not found" })
  }
})


      this.passthrough();
    },
  });
}
