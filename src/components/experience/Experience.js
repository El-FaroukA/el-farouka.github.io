import React from 'react'
import './experience.css'
import { BsFillPatchCheckFill} from 'react-icons/bs'


const Experience = () => {
  return (
    <section id="experience">
      <h5>Mes compétences</h5>
      <h2>Aperçu de mes acquis</h2>
      <div className = "container experience__container">   
        <div data-aos = "fade-right" className="experience__frontend">
            <h3>Développement Frontend</h3>
            <div className="experience__content">
              <article className="experience__details">
                < BsFillPatchCheckFill className ="experience__details-icon" />
                <div>
                  <h4>HTML</h4>
                  <small className="text-light">Intermediaire</small>
                </div>
              </article>
              <article className="experience__details">
                < BsFillPatchCheckFill className ="experience__details-icon" />
                <div>
                  <h4>CSS</h4>
                  <small className="text-light">Débutant</small>
                </div>
              </article>
              <article className="experience__details">
                < BsFillPatchCheckFill className ="experience__details-icon" />
                <div>
                  <h4>JavaScript</h4>
                  <small className="text-light">Débutant</small>
                </div>
              </article>
              <article className="experience__details">
                < BsFillPatchCheckFill className ="experience__details-icon" />
                <div>
                  <h4>ReactJs</h4>
                  <small className="text-light">Débutant</small>
                </div>
              </article>
            </div>
        </div>

        <div data-aos = "fade-left" className="experience__backend">
          <h3>Développement Backend</h3>
          <div className="experience__content">
          <article className="experience__details">
                < BsFillPatchCheckFill className ="experience__details-icon" />
                <div>
                  <h4>Java</h4>
                  <small className="text-light">Intermediaire</small>
                </div>
              </article>
              <article className="experience__details">
                < BsFillPatchCheckFill className ="experience__details-icon" />
                <div>
                  <h4>PHP</h4>
                  <small className="text-light">Intermediaire</small>
                </div>
              </article>
              <article className="experience__details">
                < BsFillPatchCheckFill className ="experience__details-icon" />
                <div>
                  <h4>Python</h4>
                  <small className="text-light">Intermediaire</small>
                </div>
              </article>
              <article className="experience__details">
                < BsFillPatchCheckFill className ="experience__details-icon" />
                <div>
                  <h4>Flutter</h4>
                  <small className="text-light">Intermediaire</small>
                </div>
              </article>
              <article className="experience__details">
                < BsFillPatchCheckFill className ="experience__details-icon" />
                <div>
                  <h4>MySQL</h4>
                  <small className="text-light">Intermediaire</small>
                </div>
              </article>
              <article className="experience__details">
                < BsFillPatchCheckFill className ="experience__details-icon" />
                <div>
                  <h4>Solidity</h4>
                  <small className="text-light">Débutant</small>
                </div>
              </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
