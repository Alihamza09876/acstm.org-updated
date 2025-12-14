import React from 'react';
import { Link } from 'react-router-dom';

const ActionCards = () => {
    return (
        <section className="features1 cid-qZxudrI2Pn bg-light" id="features1-j" style={{ paddingBottom: '55px' }}>
            <div className="container">
                <div className="media-container-row">
                    <div className="card p-3 col-12 col-md-6 col-lg-3">
                        <div className="card-img pb-3">
                            <span className="mbri-desktop mbr-iconfont"></span>
                        </div>
                        <div className="card-box">
                            <h4 className="card-title py-3 mbr-fonts-style display-5">
                                Register
                            </h4>
                            <div className="mbr-text mbr-fonts-style display-7" style={{ textAlign: 'center' }}>
                                Take advantage of the opportunity to register today and network face-to-face with some of the most influential leaders in your field.<br /><br />
                                <Link to="/register" className="btn btn-sm btn-primary display-4" style={{ textAlign: 'center' }}>Register Now</Link>
                            </div>
                        </div>
                    </div>

                    <div className="card p-3 col-12 col-md-6 col-lg-3">
                        <div className="card-img pb-3">
                            <span className="mbr-iconfont mbri-cursor-click"></span>
                        </div>
                        <div className="card-box">
                            <h4 className="card-title py-3 mbr-fonts-style display-5">Share</h4>
                            <div className="mbr-text mbr-fonts-style display-7">
                                Don't miss the chance to share your outstanding research work with the global academic community by submitting your abstract before the deadline.<br /><br />
                                <Link to="/register" className="btn btn-sm btn-primary display-4" style={{ textAlign: 'center' }}>Submit Abstract</Link>
                            </div>
                        </div>
                    </div>

                    <div className="card p-3 col-12 col-md-6 col-lg-3">
                        <div className="card-img pb-3">
                            <span className="mbr-iconfont mbri-setting"></span>
                        </div>
                        <div className="card-box">
                            <h4 className="card-title py-3 mbr-fonts-style display-5">
                                Exhibit
                            </h4>
                            <div className="mbr-text mbr-fonts-style display-7">
                                This hybrid event offers the perfect chance to interact and connect with your targeted audience, both in-person and online.<br /><br />
                                <a href="/acstmprospectus-2021.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-primary display-4" style={{ textAlign: 'center' }}>Book a Stand</a>
                            </div>
                        </div>
                    </div>

                    <div className="card p-3 col-12 col-md-6 col-lg-3">
                        <div className="card-img pb-3">
                            <span className="mbr-iconfont mbri-hot-cup"></span>
                        </div>
                        <div className="card-box">
                            <h4 className="card-title py-3 mbr-fonts-style display-5">
                                Sponsor
                            </h4>
                            <div className="mbr-text mbr-fonts-style display-7">
                                By becoming a Sponsor, you will gain high visibility among the participants not only during the event but also in post-event activities.<br /><br />
                                <a href="/acstmprospectus-2021.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-primary display-4" style={{ textAlign: 'center' }}>Be a Sponsor</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ActionCards;
