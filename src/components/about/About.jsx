import React from 'react'
import './About.css'
import Dagim from '../../assets/Dagim4.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {BsFolderCheck} from 'react-icons/bs'


const About = () => {
  return (
    <section id='about'>
      <h5> Get to know</h5>
      <h2> More About Me</h2>

      <div className='container about__container'>
        <div className="about__me">
            <div className="about__me-image">
              <img src={Dagim} alt = "About Image"/>
            </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward class= 'about__icon'/>
              <h5>Work Experience</h5>
              <small>3 years</small>
            </article>
            <article className='about__card'>
              <FiUsers class= 'about__icon'/>
              <h5>Affiliations</h5>
              <small>UI-UX Designer and Social Media Manager at A2SV | Africa to Silicon Valley</small>
            </article>
            <article className='about__card'>
              <BsFolderCheck class= 'about__icon'/>
              <h5>Projects</h5>
              <small>5 Completed Projects</small>
            </article>
          </div>
          <p>Hi, I'm Dagmawi Yesuf, a versatile software engineer and frontend developer with a passion for UX design, video production, graphics, and digital marketing. My career journey has led me to explore diverse facets of the digital world, culminating in a unique skill set that combines technical expertise with creative flair. 
          </p>
        <a href='#contact' className='btn btn-primary'>Let's talk</a>
        </div>
      </div>
    </section>
  )
}

export default About