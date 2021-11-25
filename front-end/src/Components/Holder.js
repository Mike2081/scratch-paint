import React, { useRef, useState, useEffect, useCallback } from "react";
import "../Styles/HolderCSS/Holder.css";
import NavSideBar from "./NavSideBar";
import downloadPhoto from "../Images/download-file.png";

function Holder() {
  const colours = ["white"];
  const [widthSettings, setWidthSettings] = useState(1);
  const [pickedColor, setPickedColor] = useState(colours[""]);
  console.log(pickedColor);
  const canvasRef = useRef(null);
  const ctx = useRef(null);
  const [beginDrawing, setBeginDrawing] = useState(false);
  const [lastPosition, setPosition] = useState({ x: 0, y: 0 });

  const eraser = () => {
    setPickedColor("#ffffff");
  };
  const black = () => {
    setPickedColor("#000000");
  };
  const purple = () => {
    setPickedColor("#800080");
  };
  const red = () => {
    setPickedColor("#FF0000");
  };
  const green = () => {
    setPickedColor("#00FF00");
  };
  const yellow = () => {
    setPickedColor("#FFFF00");
  };
  const orange = () => {
    setPickedColor("#FFA500");
  };
  const blue = () => {
    setPickedColor("#0000FF");
  };

  const increaseWidth = () => {
    setWidthSettings(widthSettings + 1);
  };

  const decreaseWidth = () => {
    setWidthSettings(widthSettings - 1);
  };

  const downloadPNG = async () => {
    const image = canvasRef.current.toDataURL("image/png");
    const blob = await (await fetch(image)).blob();
    const blobURL = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = blobURL;
    link.download = "scratchPaint.png";
    link.click();
  };

  const downloadSVG = async () => {
    const image = canvasRef.current.toDataURL("image/svg");
    const blob = await (await fetch(image)).blob();
    const blobURL = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = blobURL;
    link.download = "scratchPaint.svg";
    link.click();
  };

  const downloadJPG = async () => {
    const image = canvasRef.current.toDataURL("image/jpg");
    const blob = await (await fetch(image)).blob();
    const blobURL = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = blobURL;
    link.download = "scratchPaint.jpg";
    link.click();
  };

  useEffect(() => {
    if (canvasRef.current) {
      ctx.current = canvasRef.current.getContext("2d");
    }
  }, []);

  const draw = useCallback(
    (x, y) => {
      if (beginDrawing) {
        ctx.current.beginPath();
        ctx.current.strokeStyle = pickedColor;
        ctx.current.lineWidth = widthSettings;
        ctx.current.lineJoin = "round";
        ctx.current.moveTo(lastPosition.x, lastPosition.y);
        ctx.current.lineTo(x, y);
        ctx.current.closePath();
        ctx.current.stroke();

        setPosition({
          x,
          y,
        });
      }
    },
    [lastPosition, beginDrawing, pickedColor, setPosition, widthSettings]
  );

  const onMouseDown = (e) => {
    setPosition({
      x: e.pageX,
      y: e.pageY,
    });
    setBeginDrawing(true);
  };

  const onMouseUp = (e) => {
    setBeginDrawing(false);
  };

  const onMouseMove = (e) => {
    draw(e.pageX, e.pageY);
  };

  const clear = () => {
    ctx.current.clearRect(
      0,
      0,
      ctx.current.canvas.width,
      ctx.current.canvas.height
    );
  };

  return (
    <div>
      <div className="holderCanvas">
        <div className="canvas-container">
          <canvas
            id="canvas"
            width={500}
            height={500}
            ref={canvasRef}
            onMouseDown={onMouseDown}
            onMouseUp={onMouseUp}
            onMouseLeave={onMouseUp}
            onMouseMove={onMouseMove}
          />
          <button
            className="holderCanvas__buttonContainer__downloadBox__downloadbuttons"
            onClick={downloadPNG}
          >
            Download
          </button>
        </div>

        <div className="holderCanvas__buttonContainer">
          <div className="holderCanvas__buttonContainer__widthBox">
            <span className="holderCanvas__buttonContainer__widthBox__widthButtonsTitle">
              Width
            </span>
            <button
              className="holderCanvas__buttonContainer__widthBox__widthButtons"
              onClick={increaseWidth}
            >
              +
            </button>
            <button className="holderCanvas__buttonContainer__widthBox__widthButtons">
              {widthSettings}
            </button>
            <button
              className="holderCanvas__buttonContainer__widthBox__widthButtons"
              onClick={decreaseWidth}
            >
              -
            </button>
          </div>

          <div className="holderCanvas__buttonContainer__colourBox">
            <button
              className="holderCanvas__buttonContainer__colourBox__blue"
              onClick={blue}
              value={pickedColor}
              onChange={(e) => setPickedColor(e.target.value)}
            ></button>
            <button
              className="holderCanvas__buttonContainer__colourBox__white"
              onClick={eraser}
              value={pickedColor}
              onChange={(e) => setPickedColor(e.target.value)}
            ></button>
            <button
              className="holderCanvas__buttonContainer__colourBox__black"
              onClick={black}
              value={pickedColor}
              onChange={(e) => setPickedColor(e.target.value)}
            ></button>
            <button
              className="holderCanvas__buttonContainer__colourBox__red"
              onClick={red}
              value={pickedColor}
              onChange={(e) => setPickedColor(e.target.value)}
            ></button>
            <button
              className="holderCanvas__buttonContainer__colourBox__green"
              onClick={green}
              value={pickedColor}
              onChange={(e) => setPickedColor(e.target.value)}
            ></button>
            <button
              className="holderCanvas__buttonContainer__colourBox__yellow"
              onClick={yellow}
              value={pickedColor}
              onChange={(e) => setPickedColor(e.target.value)}
            ></button>
            <button
              className="holderCanvas__buttonContainer__colourBox__orange"
              onClick={orange}
              value={pickedColor}
              onChange={(e) => setPickedColor(e.target.value)}
            ></button>
            <button
              className="holderCanvas__buttonContainer__colourBox__purple"
              onClick={purple}
              value={pickedColor}
              onChange={(e) => setPickedColor(e.target.value)}
            ></button>
          </div>
          <div className="holderCanvas__buttonContainer__eraserBox">
            <div>
              <input
                className="holderCanvas__buttonContainer__eraserBox__eraserButtons"
                type="color"
                value={pickedColor}
                onChange={(e) => setPickedColor(e.target.value)}
              />
            </div>
            <button
              className="holderCanvas__buttonContainer__eraserBox__eraserButtons"
              onClick={eraser}
              value={pickedColor}
              onChange={(e) => setPickedColor(e.target.value)}
            >
              Eraser
            </button>
            <button
              className="holderCanvas__buttonContainer__eraserBox__eraserButtons"
              onClick={clear}
            >
              Clear
            </button>
          </div>

          {/* <div className="holderCanvas__buttonContainer__downloadBox">
            <button
              className="holderCanvas__buttonContainer__downloadBox__downloadbuttons"
              onClick={downloadPNG}
            >
              <img
                className="holderCanvas__buttonContainer__downloadBox__downloadbuttons__pic"
                src={downloadPhoto}
                alt=""
              />
              .PNG
            </button>
            <button
              className="holderCanvas__buttonContainer__downloadBox__downloadbuttons"
              onClick={downloadSVG}
            >
              <img
                className="holderCanvas__buttonContainer__downloadBox__downloadbuttons__pic"
                src={downloadPhoto}
                alt=""
              />
              .SVG
            </button>
            <button
              className="holderCanvas__buttonContainer__downloadBox__downloadbuttons"
              onClick={downloadJPG}
            >
              <img
                className="holderCanvas__buttonContainer__downloadBox__downloadbuttons__pic"
                src={downloadPhoto}
                alt=""
              />
              .JPG
            </button>
          </div> */}
        </div>
        <NavSideBar />
      </div>
    </div>
  );
}

export default Holder;
