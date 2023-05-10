import React, { useRef } from "react";
import "./contact.css";
import { contactConfig } from "./content_option";
import emailjs from '@emailjs/browser';
import image from '../../Assets/support.png';
import { FaGithub, FaLinkedinIn, FaTelegramPlane, FaInstagram, FaFacebook } from 'react-icons/fa'


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(contactConfig.YOUR_SERVICE_ID, contactConfig.YOUR_TEMPLATE_ID, form.current, contactConfig.YOUR_USER_ID)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

    return (
        <body className="contact">
      <div className="container right-panel-active">
        <div className="container__form">
          <form action="#" className="form" id="form1">

         <address>
           <img src={image} className="support"/>
           <br/>
           <br/>
           <div className="email_phone">
           <strong >Email:</strong> {contactConfig.YOUR_EMAIL}
            <p>
               <strong >Phone:</strong> {contactConfig.YOUR_PHONE}
            </p>
            </div>
            <br/>
            <a href="https://www.linkedin.com/in/олег-герій-451a47251/" target="_blank" class="icon-button linkedin"><FaLinkedinIn class="icon-linkedin"/><span></span></a>
            <a href="https://github.com/gr-oleg/LvivTrans.git" target="_blank" class="icon-button github"><FaGithub class="icon-github"/><span></span></a>
            <a href="https://t.me/gr6_oleg" target="_blank" class="icon-button telegram"><FaTelegramPlane class="icon-telegram"/><span></span></a>
            <a href="#" target="_blank" class="icon-button italic"><FaInstagram class="icon-italic"/><span></span></a>
            <a href="https://www.facebook.com/profile.php?id=100015682263591" target="_blank" class="icon-button facebook"><FaFacebook class="icon-facebook"/><span></span></a>
         </address>
            
          </form>
        </div>
        
        <div className="sendEmail">
        <form ref={form} onSubmit={sendEmail}>
        <div className="container__overlay">
          <div className="text">
         <h1 className="form__title_contact">Contact Me</h1>
         <div className="inp">

            <input type="text" name="user_name" placeholder="Name" className="input" />
            <input type="email" name="user_email" placeholder="Email" className="input" />
            <textarea name="message" placeholder="Message" rows="4" className="input"></textarea>
            <button type="submit" className="btnl">Send</button>
            
            
          </div>
          </div>
        </div>
        </form>
        </div>
      </div>

    </body>
  );        
}

export default Contact