import React, { useEffect, useRef, useState } from 'react'

const Canvas = () => {
  const canvasRef = useRef< HTMLCanvasElement > (null);
  const [isDrawing, setIsDrawing] = useState(false);

  useEffect(()=> {
    const canvas = canvasRef.current;
    if(canvas) {
        const ctx = canvas.getContext('2d');
        if (ctx) {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight - canvas.offsetTop;
            ctx.lineCap = 'round'; // brush type
            ctx.linewidth = 3; // brush siz
        }
    }
  }, [])

  const startDrawing = (e) => {
    const canvas = canvasRef.current;
    if(canvas) {
        canvas.style.background = 'black';
        const ctx = canvas.getContext('2d');
        if (ctx) {
            ctx.beginPath();
            ctx.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
            setIsDrawing(true);

        }
    }
  }

  const stopDrawing = () => {
    setIsDrawing(false)
  }

  const draw =(e)=> {
    if(!isDrawing){
        return;
    }
    const canvas = canvasRef.current;
    if(canvas) {
        canvas.style.background = 'black';
        const ctx = canvas.getContext('2d');
        if (ctx) {
            ctx,strokeStyle = 'white'
            ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
            ctx.stroke();

        }
    }
  }

  return (
    <>
    <canvas 
        ref={useRef} 
        id="canvas"
        className="absolute top-0 left-0 w-full h-full"
        onMouseDown={startDrawing}
        onMouseOut={stopDrawing}
        onMouseUp={stopDrawing}
        />
    </>
  )
}

export default Canvas