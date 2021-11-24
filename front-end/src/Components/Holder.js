import React, { useRef, useState, useEffect, useCallback } from "react";
import "../Styles/HolderCSS/Holder.css";

function Holder() {
  const colours = [];
  const [widthSettings, setWidthSettings] = useState(0);
  const [pickedColor, setPickedColor] = useState(colours['']);
  const canvasRef = useRef(null);
  const ctx = useRef(null);
  const [beginDrawing, setBeginDrawing] =useState(false);
  const [lastPosition, setPosition] = useState({x: 0, y: 0});

  const increaseWidth = () => {
    setWidthSettings(widthSettings + 1);
  }

  const decreaseWidth = () => {
    setWidthSettings(widthSettings - 1);
  }

  const download = async () => {
    const image = canvasRef.current.toDataURL('image/png');
    const blob = await (await fetch(image)).blob();
    const blobURL = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = blobURL;
    link.download = "image.png";
    link.click();
  }
  useEffect(() => {
    if (canvasRef.current) {
      ctx.current = canvasRef.current.getContext('2d');
    }
  }, []);

  const draw = useCallback((x, y) => {
    if (beginDrawing) {
        ctx.current.beginPath();
        ctx.current.strokeStyle = pickedColor;
        ctx.current.lineWidth = widthSettings;
        ctx.current.lineJoin = 'round';
        ctx.current.moveTo(lastPosition.x, lastPosition.y);
        ctx.current.lineTo(x, y);
        ctx.current.closePath();
        ctx.current.stroke();

        setPosition({
          x,
          y
        })
      }
  },[lastPosition, beginDrawing, pickedColor, setPosition, widthSettings])

  const onMouseDown = (e) => {
    setPosition({
      x: e.pageX,
      y: e.pageY
    })
    setBeginDrawing(true)
  }

  const onMouseUp = (e) => {
    setBeginDrawing(false)
  }

  const onMouseMove = (e) => {
    draw(e.pageX, e.pageY)
  }

  const clear = () => {
    ctx.current.clearRect(0, 0, ctx.current.canvas.width, ctx.current.canvas.height)
  }

  return (
    <div>
      
      <canvas id="canvas"
      style={{
          border: "7px solid dimgrey"
        }}
        width={400}
        height={400}
        ref={canvasRef}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        onMouseMove={onMouseMove}
      />
      <input type="color" value={pickedColor} onChange={(e) => setPickedColor(e.target.value)}/>
      <button onClick={clear}>Clear</button>
      <button onClick={download}>Download</button>
      <button onClick={decreaseWidth}>-</button>
      <button>width: {widthSettings}</button>
      <button onClick={increaseWidth}>+</button>
    </div>
  );
}

export default Holder;
