/** @jsx createElement */
import { React, createElement, Link } from "../dep.ts";

export default function Index() {
  return (
    <div>
      <h1>My Application</h1>
      <Link to="test">Test Page</Link>
      <button onClick={() => alert("clicked")}>Click me!</button>
    </div>
  );
}
