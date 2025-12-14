import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <section className="menu cid-qZxsmEPcUI" once="menu" id="menu2-i">
            <nav className="navbar navbar-expand beta-menu navbar-dropdown align-items-center navbar-fixed-top navbar-toggleable-sm" style={{backgroundColor: 'rgba(255, 255, 255, 0.9)'}}>
                <button className="navbar-toggler navbar-tog-gler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <div className="hamburger">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </button>
                <div className="container">
                    <div className="menu-logo">
                        <div className="navbar-brand">
                            <span className="navbar-logo">
                                <Link to="/">
                                    <img src="/assets_acstm/images/acstm2024-166x63.png" alt="ACSTM" title="" style={{height: '5.8rem'}} />
                                </Link>
                            </span>
                        </div>
                    </div>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav nav-dropdown" data-app-modern-menu="true">
                            <li className="nav-item">
                                <Link className="nav-link link text-black display-4" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link link text-black display-4" to="/#committee">Committee</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link link text-black display-4" to="/#sponsor">Sponsor</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link link text-black display-4" to="/program">Program</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link link text-black display-4" to="/#venue">Venue</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link link text-black dropdown-toggle display-4" href="#" data-toggle="dropdown-submenu">Proceedings</a>
                                <div className="dropdown-menu" style={{backgroundColor: '#ECECEC'}}>
                                    <a className="text-black dropdown-item display-4" style={{borderBottom: '2px solid white'}} href="event.html" target="_blank">2025</a>
                                    <a className="text-black dropdown-item display-4" style={{borderBottom: '2px solid white'}} href="event.html" target="_blank">2024</a>
                                    <a className="text-black dropdown-item display-4" style={{borderBottom: '2px solid white'}} href="event.html" target="_blank">2021</a>
                                    <a className="text-black dropdown-item display-4" style={{borderBottom: '2px solid white'}} href="event.html" target="_blank">2019</a>
                                    <a className="text-black dropdown-item display-4" style={{borderBottom: '2px solid white'}} href="event.html" target="_blank">2018</a>
                                    <a className="text-black dropdown-item display-4" style={{borderBottom: '2px solid white'}} href="event.html" target="_blank">2017</a>
                                </div>
                            </li>
                        </ul>
                        <div className="navbar-buttons mbr-section-btn">
                            <Link className="btn btn-sm btn-primary display-4" to="/register">Register Now!</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </section>
    );
};

export default Navbar;
