import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBookAlt} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {TiContacts} from 'react-icons/ti'
import {useState} from 'react'
import {GiSkills} from 'react-icons/gi'
import {IoIosSchool} from 'react-icons/io'

const Nav = () => {
  const [activeNav, setActive] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActive('#')}className = {activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
      <a href="#about" onClick={() => setActive('#about')} className = {activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>
      <a href="#experience" onClick={() => setActive('#experience')} className = {activeNav === '#experience' ? 'active' : ''}><GiSkills/></a>
      <a href="#parcours" onClick={() => setActive('#parcours')} className = {activeNav === '#parcours' ? 'active' : ''}><IoIosSchool/></a>
      <a href="#portfolio" onClick={() => setActive('#portfolio')} className = {activeNav === '#portfolio' ? 'active' : ''}><BiBookAlt/></a>
      {/*<a href="#services" onClick={() => setActive('#services')} className = {activeNav === '#services' ? 'active' : ''}><RiServiceLine/></a>*/}
      {/*<a href="#testimonial" onClick={() => setActive('#testimonial')} className = {activeNav === '#testimonial' ? 'active' : ''}><RiServiceLine/></a>*/}
      <a href="#contact" onClick={() => setActive('#contact')} className = {activeNav === '#contact' ? 'active' : ''}><TiContacts/></a>
    </nav>
  )
}

export default Nav