import React from 'react'
import'./Header.css'
import CTA from './CTA'
import Dagim from '../../assets/Dagim4.png'
import HeaderSocials from './HeaderSocials'


const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5> Hello I'm</h5>
        <h1> Dagmawi Yesuf</h1>
        <h5 className="text-light"> Software Engineer | UI-UX Designer</h5>
        <CTA/>
        <HeaderSocials />

        <div className="me">
          <img src={Dagim} alt="me" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header