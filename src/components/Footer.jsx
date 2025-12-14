import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <section className="cid-qZxzukgY1C" id="footer7-n" style={{ backgroundColor: '#2e2e2e' }}>
            {/* Added style roughly matching what 'cid-qZxzukgY1C' or default footer might have if CSS not perfectly loaded, but CSS should handle it. 
                Checked original HTML, it relies on classes. I will trust classes.
            */}
            <div className="container">
                <div className="media-container-row align-center mbr-white">
                    <div className="row row-links">
                        <ul className="foot-menu">
                            <li className="foot-menu-item mbr-fonts-style display-7">
                                <Link to="/">HOME</Link>
                            </li>
                            <li className="foot-menu-item mbr-fonts-style display-7">
                                <a href="https://editorscafe.org/" target="_blank" rel="noopener noreferrer">BLOG</a>
                            </li>
                        </ul>
                    </div>
                    <div className="row social-row">
                        <div className="social-list align-right pb-2">
                            <div className="soc-item">
                                <a href="https://twitter.com/the_acse/" target="_blank" rel="noopener noreferrer">
                                    <span className="socicon-twitter socicon mbr-iconfont mbr-iconfont-social"></span>
                                </a>
                            </div>
                            <div className="soc-item">
                                <a href="https://www.facebook.com/theacse" target="_blank" rel="noopener noreferrer">
                                    <span className="socicon-facebook socicon mbr-iconfont mbr-iconfont-social"></span>
                                </a>
                            </div>
                            <div className="soc-item">
                                <a href="https://www.linkedin.com/in/theacse/" target="_blank" rel="noopener noreferrer">
                                    <span className="socicon-linkedin socicon mbr-iconfont mbr-iconfont-social"></span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="row row-copirayt">
                        <p className="mbr-text mb-0 mbr-fonts-style mbr-white align-center display-7">
                            © Copyright 2025 ACSTM - All Rights Reserved
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;
