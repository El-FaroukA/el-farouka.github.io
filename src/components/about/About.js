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
          Je m'appelle El-Farouk ACHIRAFI, j'ai 18 ans et je suis actuellement en 2ème année de DUT informatique.
          Depuis tout petit, j'ai toujours été attiré par le domaine de la technologie et de l'informatique,
          et lorsque je suis arrivé au lycée, j'ai décidé de poursuivre dans la branche de l'informatique afin d'y faire mon métier. Après le bac, je me suis donc dirigé vers un DUT Informatique.
          À la fin de mon diplôme, j'intégrerai  l'IPI de Toulouse pour un bachelor 3 - développeur fullstack en alternance chez Sopra Steria.
          </p>

          <a data-aos = "fade-left" data-aos-duration="650" href="#contact" className="btn btn-primary">Contactez moi</a>
        </div>
      </div>
    </section>
  )
}

export default About
