import React, { useRef } from 'react'
import './canvas.scss'

const Canvas = () => {
  const canvasRef = useRef()
  return (
    <div className="canvas">
      <canvas id='canvas'
        
        ref={canvasRef}
        width={760}
        height={450}
        // style={{width:"300px", height:"300px"}}
      ></canvas>
    </div>
  )
}

export default Canvas