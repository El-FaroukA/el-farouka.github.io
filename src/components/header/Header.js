import React from 'react'
import CTA from './CTA'
import './header.css'
import ME from '../../assets/me2.png'
import HeaderSocial from './HeaderSocial'
import Typical from 'react-typical'

const Header = () => {
  return (
    <header>
        <div className="container header__container">
          <div className="header__details">
            <h5>Salut moi c'est,</h5>
            <h1>El-Farouk Achirafi</h1>
            <Typical
            loop={Infinity}
              steps={[
                "Développeur Full-Stack Junior💻",
                1000,
                "Étudiant à l'IUT de Blagnac 🏫",
                1000
              ]}
            />
            <h5>Bienvenue sur mon portfolio, vous pourrez trouver des informations me concernant comme mon CV, mes différents projets, mes passions et un espace pour me contacter.</h5>
            <CTA />
          </div>
          <HeaderSocial />
          <div className="me">
            <img src={ME} alt="" />
          </div>
        </div>
      </header>
  )
}

export default Header
