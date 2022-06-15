import React, { useEffect } from 'react'
import './portfolio.css'
import IMG1 from '../../assets/demineur.PNG'
import IMG2 from '../../assets/Quiz.PNG'
import IMG3 from '../../assets/portSaph.PNG'
import IMG4 from '../../assets/pokedex.PNG'
import Aos from 'aos';
import 'aos/dist/aos.css';

let hasDemo = true
const data = [
  {
    id:1,
    image: IMG1,
    title: 'Démineur en Java',
    desc: "Création d'un jeu de démineur pour un projet au cours de mon DUT",
    repository: 'https://github.com/El-FaroukA/D-mineurJava',
    demo: 'https://github.com/El-FaroukA/D-mineurJava/raw/main/Demineur.jar',
  },
  {
    id:2,
    image: IMG2,
    title: 'Jeu de Quiz en Java',
    desc: "Création d'un jeu de quiz (Rendez-vous sur le gitlab afin de mieux comprendre le fonctionnement)",
    repository: 'https://gitlab.iut-blagnac.fr/mpa2021-g24/quizz.git',
    demo: '',
  },
  {
    id:3,
    image: IMG3,
    title: 'Portfolio pour une cliente',
    desc: "Création d'un site portfolio pour une cliente",
    repository: 'https://github.com/',
    demo: '',
  },
  {
    id:4,
    image: IMG4,
    title: "Pokedex en React",
    repository: 'https://github.com/El-FaroukA/pokedex',
    desc: 'Création d\'un pokedex en React utilisant l\'API de pokeapi',
    demo: '',
  },
  /*{
    id:5,
    image: IMG5,
    title: 'Portfolio Projector',
    repository: 'https://github.com/',
    demo: '',
  },
  {
    id:6,
    image: IMG6,
    title: 'Portfolio Projector',
    repository: 'https://github.com/',
    demo: '',
  }, */
]

const Portfolio = () => {
  useEffect(() => {
    Aos.init()
  }, [])
  return (
    <section id="portfolio">
      <h5>Mes projets récents</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {
          data.map(({id, image, title, desc, repository, demo}) => {
            return (
              <article key={id} data-aos = "fade-up" className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <h5>{desc}</h5>
                <div className="portfolio__item-cta">
                  <a href={repository} className="btn">Code source</a>
                  <a href={demo} className="btn btn-primary" target="_blank">Démo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio