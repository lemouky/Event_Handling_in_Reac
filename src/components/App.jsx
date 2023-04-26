import React from "react";
import { useState } from "react";

function App() {
  const [leText, setLeText] = useState("Hello");
  const [isMouseOver, setMouseOver] = useState(false);

  function HandleChangeText() {
    return setLeText(" IT´S ENTERING");
  }

  function HandleMouseOver() {
    return setMouseOver(true);
  }

  function HandleMouseOut() {
    return setMouseOver(false);
  }
  return (
    <div className="container">
      <h1>{leText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor: isMouseOver ? "black" : "white" }}
        onClick={HandleChangeText}
        onMouseOver={HandleMouseOver}
        onMouseOut={HandleMouseOut}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
