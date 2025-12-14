import React from 'react';

const ContactUs = () => {
    return (
        <section className="features1 cid-qZxudrI2Pn" id="features1-j" style={{ backgroundColor: '#FFF', paddingTop: '95px', paddingBottom: '95px' }}>
            <div className="container col-md-6">
                <div className="container text-center">
                    <h2 className="pb-2 mbr-fonts-style display-2">Contact Us</h2>
                    <h4 className="mbr-section-subtitle display-6 align-center mbr-fonts-style mbr-light text-muted">
                        Feel free to contact us anytime!<br />
                        Our dedicated Support Team is here to assist you around the clock, 24/7.
                    </h4>
                </div>
                <br />
                <div className="form">
                    <form action="https://acstm.org/contactemail.php" method="post" role="form" className="contactForm" name="ContactForm">
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <input type="text" name="txtname" className="form-control" id="txtname" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                <div className="validation"></div>
                            </div>
                            <div className="form-group col-md-6">
                                <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                                <div className="validation"></div>
                            </div>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" name="txtsub" id="txtsub" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                            <div className="validation"></div>
                        </div>
                        <div className="form-group">
                            <textarea className="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
                            <div className="validation"></div>
                        </div>
                        <div className="text-center">
                            <button type="submit" className="btn btn-sm btn-primary display-4">Send Message</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;
