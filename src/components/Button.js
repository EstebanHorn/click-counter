import React from "react";
import "../stylesheets/Button.css"

function Button({ text, isClick, clickEvent }) {
  return (
    <button
      className={isClick ? "button-click" : "button-reset"}
      onClick={clickEvent}
    >
      {text}
    </button>
  );
}

export default Button;
