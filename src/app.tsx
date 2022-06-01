/** @jsx createElement */
import { React, createElement } from "../dep.ts";

export default function App() {
  return (
    <div>
      <h1>My Application</h1>
      <button onClick={() => alert("clicked")}>Click me!</button>
    </div>
  );
}
