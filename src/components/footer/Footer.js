import React from 'react'
import './footer.css'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'
import {FiMail} from 'react-icons/fi'
import {Link} from "react-router-dom"


const Footer = () => {
  return (
    <footer>
      <ul className="permalink">
        <li><a href="#">Accueil</a></li>
        <li><a href="#about">À propos</a></li>
        <li><a href="#mention">Mention légales</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://linkedin.com/in/el-farouk-achirafi" target="_blank"><AiFillLinkedin/></a>
        <a href="https://github.com/El-FaroukA" target="_blank"><AiFillGithub/></a>
        <a href="mailto:elfarouk.achirafi@gmail.com" target="_blank"><FiMail/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; El-Farouk Achirafi. Tous droits réservés</small>
      </div>
    </footer>
  )
}

export default Footer
