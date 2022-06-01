/** @jsx createElement */
import { React, createElement, Routes, Route } from "../dep.ts";
import Index from "./index.tsx";
import Test from "./test.tsx";

export default function App() {
  return (
    <html>
      <head>
        <title>My Application</title>
        <link rel="stylesheet" href="test.css" />
      </head>
      <body>
        <div id="root">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/test" element={<Test />} />
          </Routes>
        </div>
        <script src="app.js" defer></script>
      </body>
    </html>
  );
}
