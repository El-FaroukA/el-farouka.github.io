import React from 'react'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'
import {FiMail} from 'react-icons/fi'

const HeaderSocial = () => {
  return (
    <div className="header__socials">
        <a href="https://linkedin.com/in/el-farouk-achirafi" target="_blank"><AiFillLinkedin/></a>
        <a href="https://github.com/El-FaroukA" target="_blank"><AiFillGithub/></a>
        <a href="mailto:elfarouk.achirafi@gmail.com" target="_blank"><FiMail/></a>
    </div>
  )
}

export default HeaderSocial