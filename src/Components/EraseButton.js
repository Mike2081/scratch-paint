import React from 'react'
import { CanvasStuff } from './CanvasFunctions';



export const EraseButton = () => {
  const { eraseCanvas } = CanvasStuff()

  return <button onClick={eraseCanvas}>clear</button>
}