import React, { useRef, useState } from 'react'
import Button from '../../ui/button/Button'
import './sidebar.scss'
import { loadImage } from './logics';

const Sidebar = () => {

  const openImageButton = () => {
    imageRef.current.click();
    
  };

  const result = (e, show) => {
    loadImage(e, true)
    setShow(prev => !prev)

    if(!show){
      setShowWithOtek(false)
    }
    else{
      setShowWithOtek(true)
    }
  }

  const imageRef = useRef()
  const [show, setShow] = useState(false)
  const [showWithOtek, setShowWithOtek] = useState(false)

  return (
    <div className="sidebar">
     <input
        ref={imageRef}
        id="image-input"
        type="file"
        name="name"
        accept="image/png, image/jpeg"
        onChange={(e) => loadImage(e)}
      />
      <Button text='Загрузить снимок' onClick={openImageButton} />
      <Button text='Узнать результат' onClick={(e) => result(e, show)} />

      {show && <div className="answer">
        <span>Отёк не обнаружен</span>
        <br/>
        Полученный коэффициент равен 9,7
      </div>}
      {showWithOtek && <div className="answer">
        <span>Отёк обнаружен</span>
        <br/>
        Полученный коэффициент равен 10,7
      </div>}
    </div>
  )
}

export default Sidebar