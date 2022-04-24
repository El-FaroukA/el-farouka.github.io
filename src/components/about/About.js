import React, {useEffect} from 'react'
import './about.css'
import ME from '../../assets/me.png'
import {BsAward} from 'react-icons/bs'
import {VscFolderLibrary} from 'react-icons/vsc'
import Aos from 'aos';
import 'aos/dist/aos.css';


const About = () => {
  useEffect(() => {
      Aos.init()
  }, [])
  return (
    <section id ="about">
      <h5>À propos</h5>
      <h2>Courte présentation de moi</h2>
      <div className="container about__container">
        <div data-aos = "fade-right" data-aos-duration="600" className="about__me">
          <div className="about__me-img">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div data-aos = "fade-up" data-aos-duration="600" className="about__cards">
            <article className="about__card">
                <BsAward className="about__icon"/>
                <h5>Expériences</h5>
                <small> - 1 an d'experience</small>
            </article>
            <article className="about__card">
                <VscFolderLibrary className="about__icon"/>
                <h5>Projets</h5>
                <small>10+ projets</small>
                <a href="#portfolio" className="btn">Mes projets</a>
            </article>
          </div>
          <p data-aos = "fade-left" data-aos-duration="650">
          Lorem ipsum dolor sit amet,
          consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>

          <a data-aos = "fade-left" data-aos-duration="650" href="#contact" className="btn btn-primary">Contactez moi</a>
        </div>
      </div>
    </section>
  )
}

export default About
