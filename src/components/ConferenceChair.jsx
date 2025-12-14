import React from 'react';

const ConferenceChair = () => {
    return (
        <>
            <section className="mbr-section content4 cid-qZyXLDhb3i bg-white" id="content4-u" style={{ paddingTop: '100px', paddingBottom: '0px' }}>
                <div className="container">
                    <div className="media-container-row">
                        <div className="title col-12 col-md-8">
                            <h2 className="align-center pb-3 mbr-fonts-style display-2">
                                Conference Chair
                            </h2>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mbr-section content6 cid-qZxBT7vF3o bg-white" id="content6-s" style={{ paddingBottom: '100px' }}>
                <div className="container">
                    <div className="media-container-row">
                        <div className="col-12 col-md-8">
                            <div className="media-container-row">
                                <div className="mbr-figure" style={{ width: '75%' }}>
                                    {/* Attempting to link to livedna.net directly as local relative path is likely broken in this standalone folder */}
                                    <img src="http://livedna.net/images/scientist/Kaiser-Jamil.jpg" alt="ACSTM" title="Prof. Dr. Kaiser Jamil" />
                                </div>
                                <div className="media-content">
                                    <div className="mbr-section-text">
                                        <p className="mbr-text align-right mb-0 mbr-fonts-style display-4">
                                            <strong>Prof. Dr. Kaiser Jamil</strong> is a distinguished scientist with a strong academic background at IICT, CCMB, the University of Sydney, and the University of Paris. As Head of the Genetics Department at Bhagwan Mahavir Medical Research Centre in India, she has authored over 300 publications and holds the title of Emeritus Scientist from CSIR-New Delhi. Her research focuses on Cancer Biology, Genetics, and Pharmacogenomics, with notable discoveries in polymorphic genes affecting cancer therapeutics. <br />
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ConferenceChair;
