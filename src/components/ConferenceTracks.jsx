import React, { useState } from 'react';

const ConferenceTracks = () => {
    const [activeTab, setActiveTab] = useState('track1');

    return (
        <section className="mbr-section content6 cid-qZxBT7vF3o" id="content6-s">
            <div className="container pt-5 pb-5">
                <div className="media-container-row">
                    <div className="card p-3 col-12 col-md-7 col-lg-7">
                        <h1 className="mbr-section-title mbr-fonts-style display-2"><strong>Explore Conference<br /> Tracks</strong></h1>
                        <p className="mbr-text mb-0 mbr-fonts-style display-4 pt-3">
                            Welcome to ACSTM 2025! Our 6th series of conference brings together experts and enthusiasts from different fields of Science, Technology, and Medicine to share knowledge, insights, and ideas on various topics. Our conference agenda is carefully curated by our team of experts who are knowledgeable in their respective fields. They have taken into account the latest trends, innovations, and developments to ensure that our conference topics are timely, relevant, and insightful.
                            <br /><br />
                            Our mission is to provide a captivating, informative platform that will help you grow both professionally and personally. We are confident that you will find something that interests you among our diverse range of disciplines.
                        </p>
                    </div>

                    <div className="p-4 col-12 col-md-5 col-lg-5 bg-light" style={{ borderRadius: '25px' }}>
                        <ul id="myTab" role="tablist" className="nav nav-tabs nav-pills flex-column flex-sm-row text-center bg-light border-0 rounded-nav pt-2">
                            <li className="nav-item flex-sm-fill">
                                <button
                                    onClick={() => setActiveTab('track1')}
                                    className={`nav-link border-0 text-uppercase font-weight-bold ${activeTab === 'track1' ? 'active' : ''}`}
                                    style={{ cursor: 'pointer', width: '100%', background: 'none' }}
                                >
                                    Track 1
                                </button>
                            </li>
                            <li className="nav-item flex-sm-fill">
                                <button
                                    onClick={() => setActiveTab('track2')}
                                    className={`nav-link border-0 text-uppercase font-weight-bold ${activeTab === 'track2' ? 'active' : ''}`}
                                    style={{ cursor: 'pointer', width: '100%', background: 'none' }}
                                >
                                    Track 2
                                </button>
                            </li>
                            <li className="nav-item flex-sm-fill">
                                <button
                                    onClick={() => setActiveTab('track3')}
                                    className={`nav-link border-0 text-uppercase font-weight-bold ${activeTab === 'track3' ? 'active' : ''}`}
                                    style={{ cursor: 'pointer', width: '100%', background: 'none' }}
                                >
                                    Track 3
                                </button>
                            </li>
                            <li className="nav-item flex-sm-fill">
                                <button
                                    onClick={() => setActiveTab('track4')}
                                    className={`nav-link border-0 text-uppercase font-weight-bold ${activeTab === 'track4' ? 'active' : ''}`}
                                    style={{ cursor: 'pointer', width: '100%', background: 'none' }}
                                >
                                    Track 4
                                </button>
                            </li>
                        </ul>
                        <div id="myTabContent" className="tab-content">
                            <div id="track1" role="tabpanel" className={`tab-pane fade py-3 ${activeTab === 'track1' ? 'show active' : ''}`}>
                                <div className="mbr-text mb-0 mbr-fonts-style display-4 pt-3">
                                    <h4 style={{ paddingBottom: '23px', paddingLeft: '5px' }}><strong>Medical & Health Sciences</strong></h4>
                                    <h5 style={{ paddingLeft: '25px' }}><strong>Sub-Tracks</strong></h5>
                                    <ul style={{ lineHeight: '29px' }}>
                                        <li>Clinical Medicine and Diagnostics</li>
                                        <li>Public Health and Epidemiology</li>
                                        <li>Pharmacology and Pharmaceutical Sciences</li>
                                        <li>Genetics and Genomics</li>
                                        <li>Neuroscience and Behavioral Health</li>
                                        <li>Medical Technology and Biomedical Engineering</li>
                                        <li>Immunology and Infectious Diseases</li>
                                        <li>Clinical Research and Translational Medicine</li>
                                    </ul>
                                </div>
                            </div>
                            <div id="track2" role="tabpanel" className={`tab-pane fade py-3 ${activeTab === 'track2' ? 'show active' : ''}`}>
                                <div className="mbr-text mb-0 mbr-fonts-style display-4 pt-3">
                                    <h4 style={{ paddingBottom: '23px', paddingLeft: '5px' }}><strong>Agricultural & Biological Sciences</strong></h4>
                                    <h5 style={{ paddingLeft: '25px' }}><strong>Sub-Tracks</strong></h5>
                                    <ul style={{ lineHeight: '29px' }}>
                                        <li>Plant Science and Botany</li>
                                        <li>Animal Science and Veterinary Medicine</li>
                                        <li>Microbiology and Biotechnology</li>
                                        <li>Agricultural Engineering and Technology</li>
                                        <li>Food Science and Nutrition</li>
                                        <li>Ecology and Environmental Sciences</li>
                                        <li>Genetic Engineering and Biotechnology</li>
                                        <li>Environmental Biotechnology</li>
                                    </ul>
                                </div>
                            </div>
                            <div id="track3" role="tabpanel" className={`tab-pane fade py-3 ${activeTab === 'track3' ? 'show active' : ''}`}>
                                <div className="mbr-text mb-0 mbr-fonts-style display-4 pt-3">
                                    <h4 style={{ paddingBottom: '23px', paddingLeft: '5px' }}><strong>Physical Sciences & Engineering</strong></h4>
                                    <h5 style={{ paddingLeft: '25px' }}><strong>Sub-Tracks</strong></h5>
                                    <ul style={{ lineHeight: '29px' }}>
                                        <li>Physics and Astronomy</li>
                                        <li>Chemistry and Materials Science</li>
                                        <li>Engineering and Technology</li>
                                        <li>Mathematics and Applied Mathematics</li>
                                        <li>Earth and Environmental Sciences</li>
                                        <li>Nanotechnology and Nanomaterials</li>
                                        <li>Energy and Renewable Resources</li>
                                        <li>Aerospace and Mechanical Engineering</li>
                                    </ul>
                                </div>
                            </div>
                            <div id="track4" role="tabpanel" className={`tab-pane fade py-3 ${activeTab === 'track4' ? 'show active' : ''}`}>
                                <div className="mbr-text mb-0 mbr-fonts-style display-4 pt-3">
                                    <h4 style={{ paddingBottom: '23px', paddingLeft: '5px' }}><strong>Social Sciences & Humanities</strong></h4>
                                    <h5 style={{ paddingLeft: '25px' }}><strong>Sub-Tracks</strong></h5>
                                    <ul style={{ lineHeight: '29px' }}>
                                        <li>Psychology and Behavioral Sciences </li>
                                        <li>Sociology and Anthropology </li>
                                        <li>Economics and Economic Development </li>
                                        <li>Political Science and International Relations </li>
                                        <li>Education and Pedagogy </li>
                                        <li>Linguistics and Language Studies </li>
                                        <li>History, Culture, and Heritage </li>
                                        <li>Philosophy and Ethics</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ConferenceTracks;
