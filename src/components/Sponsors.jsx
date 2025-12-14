import React from 'react';

const Sponsors = () => {
    return (
        <section className="features1 cid-qZxudrI2Pn" id="features1-j" style={{ backgroundColor: '#F5F5F5', paddingTop: '95px', paddingBottom: '95px' }}>
            <a name="sponsor"></a>
            <div className="container text-center">
                <h2 className="pb-5 mbr-fonts-style display-2">SPONSORS</h2>

                <div className="media-container-row">
                    <div className="card p-2 col-12 col-md-4 col-lg-4">
                        <div className="card-img pb-6">
                            <img src="https://theacse.com/2024/sponsors2024/platinum-card.jpg" alt="platinum" title="" style={{ borderRadius: '10px' }} />
                        </div>
                    </div>

                    <div className="card p-2 col-12 col-md-4 col-lg-4">
                        <div className="card-img pb-6">
                            <img src="https://theacse.com/2024/sponsors2024/gold-card.jpg" alt="gold" title="" style={{ borderRadius: '10px' }} />
                        </div>
                    </div>

                    <div className="card p-2 col-12 col-md-4 col-lg-4">
                        <div className="card-img pb-6">
                            <img src="https://theacse.com/2024/sponsors2024/silver-card.jpg" alt="silver" title="" style={{ borderRadius: '10px' }} />
                        </div>
                    </div>
                </div>

                <p align="center" style={{ paddingTop: '35px' }}>
                    Want to become a sponsor/exhibitor at the ACSTM? Download the <a href="/ACSTM-Sponsorship.pdf" target="_blank" rel="noopener noreferrer">Sponsorship & Exhibition Prospectus</a>
                </p>
            </div>
        </section>
    );
};

export default Sponsors;
