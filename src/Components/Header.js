import React from 'react'
import companyLogo from '../assets/images/logo/01.png'
import { Link } from 'react-router-dom'


export default function Header() {
  return (
    <div>
        <header className="header-3 pattern-1">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-xl-3 col-12">
                        <div className="mobile-menu-wrapper d-flex flex-wrap align-items-center justify-content-between">
                            <div className="header-bar d-lg-none">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            <div className="logo">
                                <Link to="/">
                                    <img src={companyLogo} alt="logo"/>
                                </Link>
                            </div>
                            <div className="ellepsis-bar d-lg-none">
                                <i className="fas fa-ellipsis-h"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-9 col-12">
                        <div className="header-top">
                            <div className="header-top-area">
                                <ul className="left lab-ul">
                                    <li>
                                        <i className="icofont-ui-call"></i> <span>+00000000007</span>
                                    </li>
                                    <li>
                                        <i className="fas fa-map-marker-alt"></i> Indore  (452001), Madhya Pradesh
                                    </li>
                                </ul>
                                <ul className="social-icons lab-ul d-flex">
                                    <li>
                                        <a href="#"><i className="fab fa-facebook-messenger"></i></a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="fab fa-twitter"></i></a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="fab fa-vimeo-v"></i></a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="fab fa-skype"></i></a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="fas fa-wifi"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="header-bottom">
                            <div className="header-wrapper">
                                <div className="menu-area justify-content-between w-100">
                                    <ul className="menu lab-ul">
                                        <li>
                                            <Link to="/">Home</Link>
                                        </li>
                                        <li>
                                            <Link to="/about">About</Link>
                                        </li>
                                        <li>
                                            <Link to="/audio">Audio</Link>
                                        </li>
                                        <li>
                                            <Link to='/gallery'>Gallery</Link>
                                        </li>
                                        <li>
                                            <Link to="/blogs">Blogs</Link>
                                        </li>
                                        <li><Link to="/contact">Contact</Link></li>
                                        <li><Link to="/login">Login/Register</Link></li>
                                    </ul>
                                    <div className="prayer-time d-none d-lg-block">
                                        <a href="#" className="prayer-time-btn"><i className="icofont-clock-time"></i> Live Stream</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </div>
  )
}
