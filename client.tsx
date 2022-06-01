import { React, ReactDOM } from "./dep.ts";

import App from "./src/app.tsx";

// @ts-expect-error document only available in browser
ReactDOM.hydrate(<App />, document.getElementById("root"));
