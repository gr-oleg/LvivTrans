import React, { useRef } from "react";
import "./contact.css";
import { contactConfig } from "./content_option";
import emailjs from '@emailjs/browser';
import image from '../../Assets/support.png';


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
           <strong >Email:</strong> {contactConfig.YOUR_EMAIL}
            <p>
               <strong>Phone:</strong> {contactConfig.YOUR_PHONE}
            </p>
            <br/>
            <a href="#" class="icon-button twitter"><i class="icon-twitter"></i><span></span></a>
            <a href="#" class="icon-button facebook"><i class="icon-facebook"></i><span></span></a>
            <a href="#" class="icon-button google-plus"><i class="icon-google-plus"></i><span></span></a>
         </address>
            
          </form>
        </div>
        
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

    </body>
  );        
}

export default Contact