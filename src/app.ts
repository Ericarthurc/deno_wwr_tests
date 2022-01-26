import { Application, cyan, underline } from "../deps.ts";
import itemRouter from "./routes/item.routes.ts";
import spa from "./middleware/spa.middleware.ts";

const app = new Application();

app.use(itemRouter.routes());
app.use(itemRouter.allowedMethods());

app.use(spa("./frontend/dist/"));

console.log(cyan(underline(`Oak started at: ${Deno.env.get("OAK_PORT")}`)));

await app.listen({
  port: parseInt(<string>Deno.env.get("OAK_PORT"), 10) || 3030,
});
