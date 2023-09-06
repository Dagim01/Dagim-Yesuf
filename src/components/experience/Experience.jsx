import React from 'react'
import './Experience.css'
import {BsFillCheckCircleFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What are my skills</h5>
      <h2> My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <artice className='experience__details'>
            <BsFillCheckCircleFill className='experience__details-icon' />
            <div>
            <h4>HTML</h4>
            <small className='text-light'>Intermediate</small>
            </div>
            </artice>

            <artice className='experience__details'>
              <BsFillCheckCircleFill className='experience__details-icon' />
            <div>
            <h4>CSS</h4>
            <small className='text-light'>Intermediate</small>
            </div>
            </artice>

            <artice className='experience__details'>
              <BsFillCheckCircleFill className='experience__details-icon' />
            <div>
            <h4>OpenGL</h4>
            <small className='text-light'>Beginner</small>
            </div>
            </artice>


            <artice className='experience__details'>
              <BsFillCheckCircleFill className='experience__details-icon' />
            <div>
            <h4>Java-Script</h4>
            <small className='text-light'>Intermediate</small>
            </div>
            </artice>

            <artice className='experience__details'>
              <BsFillCheckCircleFill className='experience__details-icon' />
            <div>
            <h4>Flutter</h4>
            <small className='text-light'>Intermediate</small>
            </div>
            </artice>

            <artice className='experience__details'>
              <BsFillCheckCircleFill className='experience__details-icon' />
            <div>
            <h4>React</h4>
            <small className='text-light'>Beginner</small>
            </div>
            </artice>

           
          </div>
        </div>
        <div className="experience__backend">

        <h3>Backend Development</h3>
          <div className="experience__content">

              
            <artice className='experience__details'>
              <BsFillCheckCircleFill className='experience__details-icon' />
           <div>
           <h4>Python</h4>
            <small className='text-light'>Experienced</small>
           </div>
            </artice>


            <artice className='experience__details'>
              <BsFillCheckCircleFill className='experience__details-icon' />
            <div>
            <h4>Node Js</h4>
            <small className='text-light'>Beginner</small>
            </div>
            </artice>

            <artice className='experience__details'>
              <BsFillCheckCircleFill className='experience__details-icon' />
            <div>
            <h4>MYSQL</h4>
            <small className='text-light'>Beginner</small>
            </div>
            </artice>

            <artice className='experience__details'>
              <BsFillCheckCircleFill className='experience__details-icon' />
            <div>
            <h4>Django</h4>
            <small className='text-light'>Beginner</small>
            </div>
            </artice>

           


          </div>

        </div>
      </div>
    </section>
  )
}

export default Experience