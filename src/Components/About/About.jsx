import React, {useEffect} from "react";
import './about.css'
import 'aos/dist/aos.css';
import Aos from "aos";


const About = () => {
    useEffect(()=>{
        Aos.init({duration:2000})
    }, [])

    return (
        <section className='about'>
            <div></div>

            <div className="aboutContent">
                <div className="textDiv">

                    <h1 data-aos="fade-up" className="aboutTitle">
                       
                    </h1>
                </div>

                <div className="cardDiv1" data-aos="fade-up-right" data-aos-duration="4000">
                        <span className="h2">
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
    )
}

export default About