import React from 'react'
import CV from '../../assets/CV.pdf'
const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download="CV_El-Farouk-ACHIRAFI" className='btn'>Télécharger mon CV</a>
        <a href="#contact" className='btn btn-primary'>Contactez moi</a>
    </div>
  )
}

export default CTA