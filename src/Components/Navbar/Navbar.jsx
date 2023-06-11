import React, {useState} from "react";
import './navbar.css'
import { FaBusAlt } from 'react-icons/fa'
import { AiFillCloseCircle } from 'react-icons/ai'
import { TbGridDots } from 'react-icons/tb'
import { Link } from "react-router-dom";
import isAuthenticated from "../../Components/Login/Login";


const Navbar = () => {
    const [cab, setCab] = useState("");
    const [active, setActive] = useState('navBar')
    //Functions show Nav
    const showNav = () => {
        setActive('navBar activeNavbar')
    }

    //Functions remove Nav
    const removeNavbar = () => {
        setActive('navBar')
    }

    const handleCabinet = () => {
        if (isAuthenticated) {
          setCab("/cabinet");
        } else {
          setCab("/login");
        }
      };

    return (
        <section className='navBarSection'>
            <header className="header flex">

                <div className="logoDiv">
                    <a href="#" className="logo flex">
                        <h1><FaBusAlt className="icon"/>  LvivTrans.</h1>
                    </a>
                </div>
                
                <div className={active}>
                    <ul className="navLists flex">

                        <li className="navItem">
                            <Link to="/home" className="navLink">Home</Link>
                        </li>

                        <li className="navItem">
                            <Link to="http://localhost:8080/swagger-ui/index.html" className="navLink">Swagger UI</Link>
                        </li>

                        <li className="navItem">
                            <Link to="/contact" className="navLink">Contact</Link>
                        </li>

                        <Link className="btn" to="/login">Login</Link>
                        
                    </ul>

                    <div onClick={removeNavbar} className="closeNavbar">
                        <AiFillCloseCircle className="icon"/>                    
                    </div>
                </div>

                <div onClick={showNav} className="toggleNavbar">
                    <TbGridDots className="icon"/>
                </div>

            </header>
        </section>
    )
}

export default Navbar