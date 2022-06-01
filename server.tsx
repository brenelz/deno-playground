/** @jsx createElement */
import { serve } from "https://deno.land/std@0.119.0/http/server.ts";
import { bundle } from "https://deno.land/x/emit/mod.ts";
import { ReactDomServer, React, StaticRouter, createElement } from "./dep.ts";
import App from "./src/app.tsx";

async function handler(req: Request) {
  const { pathname } = new URL(req.url);

  if (pathname.startsWith("/app.js")) {
    const { code } = await bundle("./client.tsx");
    return new Response(code, {
      headers: {
        "content-type": "text/javascript",
      },
    });
  }

  try {
    const file = await Deno.readFile(`./public/${pathname}`);
    if (file) {
      return new Response(file);
    }
  } catch {}

  return new Response(
    ReactDomServer.renderToString(
      <html>
        <head>
          <title>My Application</title>
          <link rel="stylesheet" href="test.css" />
        </head>
        <body>
          <div id="root">
            <StaticRouter location={req.url}>
              <App />
            </StaticRouter>
          </div>
          <script src="app.js" defer></script>
        </body>
      </html>
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
