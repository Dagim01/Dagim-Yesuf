import React from 'react'
import './Nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {GiSkills} from 'react-icons/gi'
import {FiHelpCircle} from 'react-icons/fi'
import {AiOutlineContacts} from 'react-icons/ai'
import {useState} from 'react'

const Nav = () => {
    const[activeNav,  setActiveNav] = useState('#')
  return (
    <nav>
      <a href='#' onClick={()=> setActiveNav('#')} classname ={activeNav === '#' ? 'active': ''}><AiOutlineHome/></a>
      <a href='#about' onClick={()=> setActiveNav('#about')} className= {activeNav === '#about' ? 'active' : '' }><AiOutlineUser/></a>
      <a href='#experience' onClick={()=> setActiveNav('#experience')} className= {activeNav === '#experience' ? 'active' : '' }><GiSkills/></a>
      <a href='#services' onClick={()=> setActiveNav('#services')} className= {activeNav === '#services' ? 'active' : '' }><FiHelpCircle/></a>
      <a href='#contact' onClick={()=> setActiveNav('#contact')} className= {activeNav === '#contact' ? 'active' : '' }><AiOutlineContacts/></a>
    </nav>
  )
}
 
export default Nav