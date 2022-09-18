import React from 'react'
import'./Footer.css'
import {AiFillFacebook} from 'react-icons/ai'
import {BsInstagram} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <ul className='permalinks' >
        <li> <a href='#'>Home</a></li>
        <li> <a href='#about'>About</a></li>
        <li> <a href='#experience'>Experience</a></li>
        <li> <a href='#services'>Services</a></li>
        <li> <a href='#portfolio'>Portfolio</a></li>
        <li> <a href='#contact'>Contact</a></li>
      </ul>

        <div className="footer__socials">
          <a href='https://www.facebook.com/DagimJosy/'><AiFillFacebook/></a>
          <a href='https://www.instagram.com/dagm.y_/'><BsInstagram/></a>
          <a href='https://twitter.com/Dougie_ymt'><BsTwitter/></a>

        </div>

    <div className="footer__copyright">
      <small>&copy; Dagmawi Yesuf's Portfolio. All rights reserved.</small>
    </div>
    </footer>
  )
}

export default Footer