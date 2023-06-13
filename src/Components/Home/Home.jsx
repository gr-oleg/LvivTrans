import React, { useEffect, useRef, useState } from "react";
import "./home.css";
import image1 from "../../sloy/1.png";
import image2 from "../../sloy/2.png";
import image3 from "../../sloy/3.png";
import image4 from "../../sloy/4.png";
import image5 from "../../sloy/5.jpg";
import video from "../../sloy/tracker_video.mp4";
import isAuthenticated from "../../Components/Login/Login";
import { BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";
import 'aos/dist/aos.css';
import Aos from "aos";
import { FaAngleDown } from 'react-icons/fa'
import { Link as ScrollLink } from "react-scroll";

const Home = () => {
  const textRef = useRef(null);
  const [cab, setCab] = useState("");

  useEffect(() => {
    Aos.init({duration:1500})
    const moveLayers = (e) => {
      const parallax = document.getElementById("parallax");
      const layers = parallax.children;
      const initialX = (window.innerWidth / 2 - e.pageX) / 30;
      const initialY = (window.innerHeight / 2 - e.pageY) / 30;

      Array.from(layers).forEach((layer, index) => {
        let depth = index * 0.5;
        if (index === 4) {
          depth *= -0.1; // Змінюємо швидкість та напрямок руху четвертої картинки
        }
        if (index === 6) {
          depth = 0; // Зупиняємо рух сьомої картинки
        }
        const translateX = initialX * depth;
        const translateY = initialY * depth;

        layer.style.transform = `translate3d(${translateX}px, ${translateY}px, 0)`;
      });
    

     const textElement = textRef.current;
     if (textElement) {
      const textRect = textElement.getBoundingClientRect();
      const textCenterX = textRect.left + textRect.width / 2;
      const textCenterY = textRect.top + textRect.height / 2;

      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const angleX = (mouseY - textCenterY) * 0.03;
      const angleY = (textCenterX - mouseX) * 0.03;

      textElement.style.transform = `translate(-50%, -50%) rotateX(${angleX}deg) rotateY(${angleY}deg)`;
    }};

    window.addEventListener("mousemove", moveLayers);

    return () => {
      window.removeEventListener("mousemove", moveLayers);
    };
  }, []);

  return (
    <div>
    <div className="parallax" id="parallax" >
      <div className="parallax__layer parallax__layer--back" >
        <img src={image3} alt="Layer 3" className="parallax__image" />
      </div>
      <div className="parallax__layer parallax__layer--back">
        <img src={image3} alt="Layer 3" className="parallax__image" />
      </div>
      <div className="parallax__layer parallax__layer--base" data-aos="zoom-out-up">
        <img src={image2} alt="Layer 2" className="parallax__image" />
      </div>
      <div className="parallax__layer parallax__layer--front" data-aos="fade-down">
        <img src={image1} alt="Layer 1" className="parallax__image" />
      </div>
      <div className="parallax__layer parallax__layer--back" data-aos="flip-right">
        <img src={image4} alt="Layer 4" className="parallax__image" />
      </div>
      <div className="parallax__text" ref={textRef}>
        <h1 className="parallax__text-heading">LvivTrans.</h1>
      </div>
      <div className="parallax__button-container" data-aos="zoom-out">
         <Link to="/map" className="parallax__button" style={{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
          Start
          </Link>
       </div>
    </div>

    <div className="row1-container" style={{ position: "fixed", top: "90%", left: "50%", transform: "translate(-50%, -50%)" }}>
  <span className="spacer1"></span>
  <div className="or-container">
    <span className="or-text">About</span>
    <ScrollLink to="div2" smooth={true} duration={500} className="link">
    <a href="" target="_blank" className="icon-button gg">
      <FaAngleDown className="icon-gg" />
      <span></span>
    </a>
    </ScrollLink>
  </div>
  <span className="spacer1"></span>
</div>

    <div2 id="div2"> 
     <section className='about'>
      <img src={image5} alt="Layer 4" className="yellow_bus" />
      <div className="aboutContent">

                <div className="cardDiv1" data-aos="fade-up-right">
                        <span>
                        LvivTrans is a web application designed to help citizens and tourists navigate the public transportation system in Lviv, Ukraine. The app provides real-time GPS tracking of buses, trams, and trolleybuses, allowing users to track their location and estimated arrival times.
                        </span>
                </div>

                <div className="cardDiv2" data-aos="fade-up-left">
                    <span>
                    The app features a user-friendly interface with a map displaying the current location of public transportation vehicles, as well as a search function to find specific routes or stops. Users can create an account to save their favorite routes and receive personalized updates on delays or changes in service.
                    </span>
                </div>

                <div className="cardDiv1" data-aos="fade-up-right">
                        <span className="h2">
                        The app is built using React for the frontend and Java Spring for the backend, with a PostgreSQL database to store and manage data. It also integrates with the Mapbox API to provide accurate and up-to-date maps and location data.
                        </span>
                </div>

                <div className="cardDiv2" data-aos="fade-up-left">
                    <span>
                    The app is built using React for the frontend and Java Spring for the backend, with a PostgreSQL database to store and manage data. It also integrates with the Mapbox API to provide accurate and up-to-date maps and location data.
                    </span>
                </div>
            </div>
        </section>
    </div2>

    <div3 id="div3" >
     <section className='about'>
            <video src={video} muted autoPlay loop type="video/mp4"></video>
            <div className="aboutContent">
                <div className="cardDiv1" data-aos="fade-up-right" data-aos-duration="4000">
                        <span>
                        LvivTrans is a web application designed to help citizens and tourists navigate the public transportation system in Lviv, Ukraine. The app provides real-time GPS tracking of buses, trams, and trolleybuses, allowing users to track their location and estimated arrival times.
                        </span>
                </div>

                <div className="cardDiv2" data-aos="fade-up-left">
                    <span>
                    The app features a user-friendly interface with a map displaying the current location of public transportation vehicles, as well as a search function to find specific routes or stops. Users can create an account to save their favorite routes and receive personalized updates on delays or changes in service.
                    </span>
                </div>

                <div className="cardDiv1" data-aos="fade-up-right">
                        <span className="h2">
                        The app is built using React for the frontend and Java Spring for the backend, with a PostgreSQL database to store and manage data. It also integrates with the Mapbox API to provide accurate and up-to-date maps and location data.
                        </span>
                </div>

            </div>
        </section>
    </div3>

    </div>
  );
};

export default Home;
