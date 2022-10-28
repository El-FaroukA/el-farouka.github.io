import React from 'react'
import './parcours.css'
import { ReactComponent as WorkIcon } from "../../assets/work.svg"
import { ReactComponent as SchoolIcon } from "../../assets/school.svg"
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

let timelineElements = [
  {
    id: 1,
    title: "Alternance chez Sopra Steria",
    location: "Colomiers, Toulouse",
    description:
      "Développeur fullstack",
    buttonText: "Site de l'entreprise",
    url:"https://www.soprasteria.com/",
    date: "Septembre 2022 - ",
    icon: "work",
  },
  {
    id: 2,
    title: "Stage développeur Big Data",
    location: "Castanet-Tolosan, Toulouse",
    description:
      "Évaluation des moteurs de requête SQL dans un environnement Big Data",
    buttonText: "Site de l'entreprise",
    url:"https://www.lipme.fr",
    date: "Avril 2022 - Juin 2022",
    icon: "work",
  },
  {
    id: 3,
    title: "Dut Informatique",
    location: "Université Toulouse Jean Jaurès, IUT Blagnac, Toulouse, France",
    description:
      "Cursus informatique sur 2 ans",
    buttonText: "Site de l'IUT",
    url: "https://www.iut-blagnac.fr/fr",
    date: "Septembre 2020 - Juin 2022",
    icon: "school",
  },
  {
    id: 4,
    title: "Baccalauréat Géneral Scientifique",
    location: "Lycée de Sada, Mayotte, France",
    description:
      "Mention Bien",
    buttonText: "Site du lycée",
    url: "",
    date: "2019-2020",
    icon: "school",
  }
];

const Parcours = () => {
  let workIconStyles = { background: "#B5B1B2" };
  let schoolIconStyles = { background: "#fff" };
  return (
    <section id="parcours">
      <h5>Mon parcours</h5>
      <h2>Passage en revu de mon parcours</h2>
      <div className="parcours__container">
        <VerticalTimeline>
        {
            timelineElements.map((element) => {
              let isWorkIcon = element.icon === "work"
              let showButton =
                element.buttonText !== undefined &&
                element.buttonText !== null &&
                element.buttonText !== ""
              
              return (
                <VerticalTimelineElement
                  key={element.key}
                  date={element.date}
                  contentStyle={{ background: '#B5B1B2', color: '#fff' }}
                  dateClassName="date"
                  iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
                  icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
                >
                  <h3 className="vertical-timeline-element-title">{element.title}</h3>
                  <h5 className="vertical-timeline-element-subtitle">{element.location}</h5>
                  <p id = "description">{element.description}</p>
                  {showButton && (<a className="btn btn-primary" href={element.url}>{element.buttonText}</a>)}
                </VerticalTimelineElement>
              )
            })
          }
        </VerticalTimeline>
      </div>
    </section>
  )
}

export default Parcours