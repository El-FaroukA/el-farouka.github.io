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
            <h3>Langages de programmation et outils</h3>
            <div className="experience__content">
              <article className="experience__details">
                < BsFillPatchCheckFill className ="experience__details-icon" />
                <div>
                  <h4>JAVA</h4>
                  <small className="text-light">Intermediaire</small>
                </div>
              </article>
              <article className="experience__details">
                < BsFillPatchCheckFill className ="experience__details-icon" />
                <div>
                  <h4>RUST</h4>
                  <small className="text-light">Débutant</small>
                </div>
              </article>
              <article className="experience__details">
                < BsFillPatchCheckFill className ="experience__details-icon" />
                <div>
                  <h4>PYTHON</h4>
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
                  <h4>KOTLIN</h4>
                  <small className="text-light">Débutant</small>
                </div>
              </article>
              <article className="experience__details">
                < BsFillPatchCheckFill className ="experience__details-icon" />
                <div>
                  <h4>C++</h4>
                  <small className="text-light">Débutant</small>
                </div>
              </article>
              <article className="experience__details">
                < BsFillPatchCheckFill className ="experience__details-icon" />
                <div>
                  <h4>SOLIDITY</h4>
                  <small className="text-light">Débutant</small>
                </div>
              </article>
              <article className="experience__details">
                < BsFillPatchCheckFill className ="experience__details-icon" />
                <div>
                  <h4>GIT</h4>
                  <small className="text-light">Intermediaire</small>
                </div>
              </article>
            </div>
        </div>
        <div data-aos = "fade-left" className="experience__backend">
          <h3>Framework</h3>
          <div className="experience__content">
          <article className="experience__details">
                < BsFillPatchCheckFill className ="experience__details-icon" />
                <div>
                  <h4>FLUTTER</h4>
                  <small className="text-light">Intermediaire</small>
                </div>
              </article>
              <article className="experience__details">
                < BsFillPatchCheckFill className ="experience__details-icon" />
                <div>
                  <h4>ANGULAR</h4>
                  <small className="text-light">Intermediaire</small>
                </div>
              </article>
              <article className="experience__details">
                < BsFillPatchCheckFill className ="experience__details-icon" />
                <div>
                  <h4>REACT</h4>
                  <small className="text-light">Intermediaire</small>
                </div>
              </article>
              <article className="experience__details">
                < BsFillPatchCheckFill className ="experience__details-icon" />
                <div>
                  <h4>VUE</h4>
                  <small className="text-light">Débutant</small>
                </div>
              </article>
              <article className="experience__details">
                < BsFillPatchCheckFill className ="experience__details-icon" />
                <div>
                  <h4>HARDHAT</h4>
                  <small className="text-light">Débutant</small>
                </div>
              </article>
              <article className="experience__details">
                < BsFillPatchCheckFill className ="experience__details-icon" />
                <div>
                  <h4>SWING</h4>
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
