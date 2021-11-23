import React from "react";
import Board from "./Board";
import "../Styles/HolderCSS/Holder.css";
import { EraseButton } from "./EraseButton";

function Holder() {
  return (
    <div>
      <div className="container">
        <input type="color" />
        <EraseButton />
      </div>
      <div className="holder__boardContainer">
        <Board />
      </div>
    </div>
  );
}

export default Holder;
