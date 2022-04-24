import React, { useEffect } from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'
import Aos from 'aos';
import 'aos/dist/aos.css';

const data = [
  {
    id:1,
    image: IMG1,
    title: 'Portfolio Projector',
    repository: 'https://github.com/',
    demo: '',
  },
  {
    id:2,
    image: IMG2,
    title: 'Portfolio Projector',
    repository: 'https://github.com/',
    demo: '',
  },
  {
    id:3,
    image: IMG3,
    title: 'Portfolio Projector',
    repository: 'https://github.com/',
    demo: '',
  },
  {
    id:4,
    image: IMG4,
    title: 'Portfolio Projector',
    repository: 'https://github.com/',
    demo: '',
  },
  {
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
  },
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
          data.map(({id, image, title, repository, demo}) => {
            return (
              <article key={id} data-aos = "fade-up" className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={repository} className="btn">Github</a>
                  <a href={demo} className="btn btn-primary">Démo</a>
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