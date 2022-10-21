import React, { useRef } from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_3p3v4rc', 'template_ap77hct', form.current, '1q4FTv5hIbsJl4-_J')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    
    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Comment me contacter</h5>
      <h2>Contactez moi</h2>
      <div className="container contact__container">
          <div className="contact__options">
            <article className="contact__option">
                <MdOutlineEmail className="contact__option-icon"/>
                <h4>Email</h4>
                <h5>elfarouk.achirafi@gmail.com</h5>
                <a href="mailto:elfarouk.achirafi@gmail.com" target="_blank">Envoyez moi un message</a>
            </article>
          </div>
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="nom" placeholder="Votre nom" required/>
            <input type="email" name="email" placeholder="Votre e-mail" required/>
            <textarea name="msg" rows="7" placeholder="Votre message" required></textarea>
            <button type ="submit" className="btn btn-primary">Envoyez</button>
          </form>
      </div>
      
    </section>
  )
}

export default Contact