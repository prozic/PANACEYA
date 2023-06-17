import React, { useState } from 'react'
import logo from '../../assets/img/logo.jpg'
import Button from '../../ui/button/Button'
import './navbar.scss'
import Information from '../Information/Information'

const Navbar = () => {
  const [modal, setModal] = useState(false)
  const showModal = () =>{
    setModal(true)
  }
  return (
    <div className='navbar'>
    <div className="logo">
      <img src={logo} alt="Логотип" />
    </div>
    <div className="text">Кардиогенный отёк лёгких</div>

    <Button text='Информация' onClick={showModal}/>
    {modal && <Information setModal={setModal}/>}
    </div>
  )
}

export default Navbar