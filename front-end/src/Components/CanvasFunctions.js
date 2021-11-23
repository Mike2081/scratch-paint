import React, { useContext, useRef, useState } from "react";
import io from 'socket.io-client';



    const CanvasFunctions = React.createContext();

    
    export const CanvasProvider = ({ children }) => {
        const [beginDrawing, setbeginDrawing] = useState(false)
        const canvasRef = useRef(null);
        const contextRef = useRef(null);
        //^ will be wrapped around <App/> in index.js, 
        // so these hooks can be used on different components

        //START
        
        const socket = io.connect("http://localhost:5000");    
    
        socket.on("canvas-data", function(data){
    
                const root = this;
                const interval = setInterval(function(){
                    if(root.beginDrawing) return;
                    root.beginDrawing = true;
                    clearInterval(interval);
                    const image = new Image();
                    const canvas = setupCanvas();
                    const ctx = setupCanvas.getContext('2d');
                    image.onload = function() {
                        ctx.drawImage(image, 0, 0);
    
                        root.beginDrawing = false;
                    };
                    image.src = data;
                }, 200)
            })

            //END

        const setupCanvas = () => {
            const canvas = canvasRef.current
            canvas.width = window.innerWidth * 2;
            canvas.height = window.innerHeight * 2;
            //^ Doubling the pixel density for better optics for,
            // retina displays

            const context = canvas.getContext("2d")
            context.scale(2, 2);
            context.lineCap = "round";
            context.strokeStyle = "black";
            context.lineWidth = 5;
            contextRef.current = context;
            //^ canvas drawing ratio appearance, end of the lines are round,
            // colour is black, thickness of line is 5
        };

        const startDrawing = ({ nativeEvent }) => {
            const { offsetX, offsetY } = nativeEvent;
            contextRef.current.beginPath();
            contextRef.current.moveTo(offsetX, offsetY);
            setbeginDrawing(true);
            //beginPath() when the mouse is clicked
            //nativeEvent grabs the mouse movements
            //moveTo where the last x,y cordinates are when the mouse is let go
        };

        const doneDrawing = () => {
            contextRef.current.closePath();
            setbeginDrawing(false);
            //when mouse is let go, set set beginDrawing to false
        };

        const root = this;
        const draw = ({ nativeEvent }) => {
            if (!beginDrawing) { //if beginDrawing is set to true than return
            return;
            }
            const { offsetX, offsetY } = nativeEvent; //nativeEvent grabs the mouse movements
            contextRef.current.lineTo(offsetX, offsetY); //draws a line from new to old cordinates
            contextRef.current.stroke(); //this is what draws the that line
            //this is suppose to share the whiteboard **START**
            if(root != undefined) clearTimeout(root);
            setTimeout(function(){
                const base64ImageData = toDataURL("image/png");
                root.socket.emit("canvas-data", base64ImageData);
            }, 1000)
            //**END */
        };

        const eraseCanvas = () => {
            const canvas = canvasRef.current;
            const context = canvas.getContext("2d")
            context.fillStyle = "white"
            context.fillRect(0, 0, canvas.width, canvas.height)
        }

    return (
        <CanvasFunctions.Provider
            value={{
                canvasRef,
                contextRef,
                setupCanvas,
                startDrawing,
                doneDrawing,
                eraseCanvas,
                draw,
            }}
        >
            {children}
        </CanvasFunctions.Provider>
    )
};

export const CanvasStuff = () => useContext(CanvasFunctions);
