import React from 'react'

import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsDribbble} from 'react-icons/bs'
import {BsBehance} from 'react-icons/bs'

const classname  = () => {
  return (
    <div class ="header__socials">
        <a href="https://www.linkedin.com/in/dagmawiyesuf/" target="_blank"><BsLinkedin/></a>
        <a href='https://github.com/Dagim01' target="_blank"><BsGithub/></a>
        <a href='https://dribbble.com/Rotund_form745' target="_blank"><BsDribbble/></a>
        <a href='https://www.behance.net/dagimyesuf' target="_blank"><BsBehance/></a>
    </div>
  )
}

export default classname 