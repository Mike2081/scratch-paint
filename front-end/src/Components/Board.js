import React, { useEffect } from "react";
import "../Styles/Board/Board.css";
import { CanvasStuff } from "./CanvasFunctions";

function Board() {
  const { canvasRef, setupCanvas, startDrawing, doneDrawing, draw } =
    CanvasStuff();

  useEffect(() => {
    setupCanvas();
  });

  return (
    <canvas
      className="board"
      onMouseDown={startDrawing}
      onMouseUp={doneDrawing}
      onMouseMove={draw}
      ref={canvasRef}
    />
  );
}

export default Board;
