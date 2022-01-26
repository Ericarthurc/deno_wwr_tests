import { Context, send } from "../../deps.ts";

export default (spaLocation: string) => {
  return async (
    // deno-lint-ignore no-explicit-any
    ctx: Context<Record<string, any>, Record<string, any>>,
    _next: () => Promise<unknown>
  ) => {
    try {
      await send(ctx, ctx.request.url.pathname, {
        root: spaLocation,
        index: "index.html",
      });
    } catch (_) {
      await send(ctx, "/index.html", {
        root: spaLocation,
      });
    }
  };
};
