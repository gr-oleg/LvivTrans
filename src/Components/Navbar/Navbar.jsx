import React, {useState} from "react";
import './navbar.css'
import { FaBusAlt, FaBus  } from 'react-icons/fa'
import { AiFillCloseCircle } from 'react-icons/ai'
import { TbGridDots } from 'react-icons/tb'

const Navbar = () => {
    const [active, setActive] = useState('navBar')
    //Functions show Nav
    const showNav = () => {
        setActive('navBar activeNavbar')
    }

    //Functions remove Nav
    const removeNavbar = () => {
        setActive('navBar')
    }

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
                            <a href="#" className="navLink">Home</a>
                        </li>

                        <li className="navItem">
                            <a href="#" className="navLink">About</a>
                        </li>

                        <li className="navItem">
                            <a href="#" className="navLink">Contact</a>
                        </li>

                        <button className="btn">
                            <a href="#">Login</a>
                        </button>
                        
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