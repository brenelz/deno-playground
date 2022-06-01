/** @jsx createElement */
import { serve } from "https://deno.land/std@0.119.0/http/server.ts";
import { ReactDomServer, React, StaticRouter, createElement } from "./dep.ts";
import App from "./src/app.tsx";

async function handler(req: Request) {
  const { pathname } = new URL(req.url);

  try {
    const file = await Deno.readFile(`./public/${pathname}`);
    if (file) {
      return new Response(file);
    }
  } catch {}

  return new Response(
    ReactDomServer.renderToString(
      <StaticRouter location={req.url}>
        <App />
      </StaticRouter>
    ),
    {
      headers: {
        "content-type": "text/html",
      },
    }
  );
}

console.log("Listening on http://localhost:8000");
serve(handler);
