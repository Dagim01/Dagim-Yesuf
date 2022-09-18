import React from 'react'
import './Contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {BsMessenger} from 'react-icons/bs'
import {FaTelegram} from 'react-icons/fa'
import { useRef } from 'react';
import emailjs from 'emailjs-com'


const Contact = () => {
  const form = useRef();
    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_tpvz23k', 'template_gshh5u2', form.current, 'y3cT1TxYscm09w-I4')
    e.target.reset()

  };


  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2> Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <AiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>daginaruto@gmail.com</h5>
           
          </article>

          <article className="contact__option">
            <BsMessenger className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Dagim Yesuf</h5>
            <a href="https://m.me/DagimJosy" target="_blank">Send a message</a>
          </article>

          <article className="contact__option">
            <FaTelegram className='contact__option-icon'/>
            <h4>Telegram</h4>
            <h5>Dagim Yesuf</h5>
            <a href="https://t.me/rotund_form745" target="_blank">Send a message</a>
          </article>


        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Fullname' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows='7' placeholder='Your Message' required ></textarea>
          <button type='submit' className='btn btn-primary'>Send a message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact