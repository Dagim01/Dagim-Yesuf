import React from 'react'
import'./Portfolio.css'
import Imagg1 from '../../assets/rateit.png'
import Imagg2 from '../../assets/Internsuit.png'
import Imagg3 from '../../assets/esa1.jpg'


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5> My Recent Works</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={Imagg1} alt="" />
          </div>
            <h3> Rate Eat</h3>
            <div className="portfolio__item-cta">
            <a href="https://github.com/RealEskalate/Micro-Yelp"className='btn'>Github</a>
            
            </div>

        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={Imagg2} alt="" />
          </div>
            <h3> InternSuit</h3>
            <div className="portfolio__item-cta">
            <a href="https://github.com/Dagim01/InternSuit-Flutter-App"className='btn'>Github</a>
            </div>

        </article>


        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={Imagg3} alt="" />
          </div>
            <h3> Ethiopian Students Aid</h3>
            <div className="portfolio__item-cta">
            <a href="https://github.com/Dagim01/Ethio-Students-Aid-ESA-"className='btn'>Github</a>
            </div>

        </article>


        
      </div>
    </section>
  )
}

export default Portfolio