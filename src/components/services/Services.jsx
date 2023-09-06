import React from 'react'
import'./Services.css'
import {AiOutlineCheck} from 'react-icons/ai'
const Services = () => {
  return (
    <section id='services'>
      <h5> What can I Provide</h5>
      <h2>Service</h2>
      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3>UI UX</h3>
          </div>

          <ul className='service__list'> 
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Come up with good UI content</p>
            </li>

            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Expert Knowledge in Figma</p>
            </li>

            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Fast Visual Communication with new Designs</p>
            </li>

            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Wireframing and prototyping.</p>
            </li>

            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Branding, typography and color theory.</p>
            </li>


          </ul>

        </article>



        <article className='service'>
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

          <ul className='service__list'> 
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Social Media Marketing Skills</p>
            </li>

            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Strong communication skills</p>
            </li>

            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Creativity</p>
            </li>

            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Graphics and Video Production</p>
            </li>

          </ul>

        </article>



        <article className='service'>
          <div className="service__head">
            <h3>Mobile App Development</h3>
          </div>

          <ul className='service__list'> 
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Knowledge in Flutter</p>
            </li>

            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>User interface (UI) design</p>
            </li>

            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p> Agile development</p>
            </li>

            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Cross-platform development skills</p>
            </li>
          </ul>

        </article>
      </div>
    </section>
  )
}

export default Services