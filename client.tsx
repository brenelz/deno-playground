import { React, ReactDOM, BrowserRouter } from "./dep.ts";

import App from "./src/app.tsx";

ReactDOM.hydrate(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  // @ts-expect-error document only available in browser
  document.getElementById("root")
);
