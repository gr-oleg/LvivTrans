import React from "react";
import "./contact.css";
import { Container, Row, Col } from "react-bootstrap";
import { contactConfig } from "./content_option";


const Contact = () => {
    return (
        <body className="contact">
      <div className="container right-panel-active">
        <div className="container__form container--signup">
          <form action="#" className="form" id="form1">
          <br />
          <br />
          <br />
            <input type="text" placeholder="Name" className="input" />
            <input type="email" placeholder="Email" className="input" />
            <input type="message" placeholder="Message" className="input" />
            <button className="btnl">Send</button>
          </form>
        </div>
        
        <div className="container__overlay">
          <div className="text">
         <h1 className="form__title_contact">Contact Me</h1>
         <br />
         <br />
         <address>
           <strong >Email:</strong>{" "}
           <a href={`mailto:${contactConfig.YOUR_EMAIL}`}>
             {contactConfig.YOUR_EMAIL}
           </a>
           <br />
           <br />
            <p>
               <strong>Phone:</strong> {contactConfig.YOUR_FONE}
             </p>
           <br />
           <br />
           <br />
           <br />
           <br />
           <br />
           <br />

         </address>
          </div>
        </div>
      </div>

    </body>
  );        
}

export default Contact