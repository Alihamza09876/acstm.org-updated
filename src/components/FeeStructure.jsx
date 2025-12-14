import React from 'react';
import { Link } from 'react-router-dom';

const FeeStructure = () => {
    return (
        <section className="section-table cid-r0dD6Bx4a9" id="table1-w" style={{ paddingTop: '95px', paddingBottom: '95px' }}>
            <div className="container container-table">
                <h2 className="mbr-section-title mbr-fonts-style align-center pb-3 display-2">Fee Structure</h2>
                <div className="table-wrapper">
                    <div className="container scroll">
                        <table className="table" cellSpacing="0">
                            <thead>
                                <tr className="table-heads">
                                    <th className="head-item mbr-fonts-style display-9">Registration Type</th>
                                    <th className="head-item mbr-fonts-style display-9" style={{ textAlign: 'center' }}>Early Bird <br />Ends Dec. 15, 2024</th>
                                    <th className="head-item mbr-fonts-style display-9" style={{ textAlign: 'center' }}>Regular<br />Ends Jan. 15, 2025</th>
                                    <th className="head-item mbr-fonts-style display-9" style={{ textAlign: 'center' }}>Late<br />Ends Feb 15, 2025</th>
                                    <th className="head-item mbr-fonts-style display-9" style={{ textAlign: 'center' }}></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr style={{ height: '1px', padding: '0px' }}>
                                    <th style={{ height: '1px', padding: '0px' }}></th>
                                </tr>
                                <tr>
                                    <td className="body-item mbr-fonts-style display-7" style={{ verticalAlign: 'middle' }}>Listener</td>
                                    <td className="body-item mbr-fonts-style display-7" style={{ textAlign: 'center', verticalAlign: 'middle' }}>50 | 100</td>
                                    <td className="body-item mbr-fonts-style display-7" style={{ textAlign: 'center', verticalAlign: 'middle' }}>100 | 200</td>
                                    <td className="body-item mbr-fonts-style display-7" style={{ textAlign: 'center', verticalAlign: 'middle' }}>200 | 300</td>
                                    <td className="body-item mbr-fonts-style display-7" style={{ textAlign: 'center', verticalAlign: 'middle' }}>
                                        <Link to="/register" className="btn btn-sm btn-primary">Register</Link>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="body-item mbr-fonts-style display-7" style={{ verticalAlign: 'middle' }}>Poster Presentation</td>
                                    <td className="body-item mbr-fonts-style display-7" style={{ textAlign: 'center', verticalAlign: 'middle' }}>100 | 150</td>
                                    <td className="body-item mbr-fonts-style display-7" style={{ textAlign: 'center', verticalAlign: 'middle' }}>150 | 200</td>
                                    <td className="body-item mbr-fonts-style display-7" style={{ textAlign: 'center', verticalAlign: 'middle' }}>200 | 250</td>
                                    <td className="body-item mbr-fonts-style display-7" style={{ textAlign: 'center', verticalAlign: 'middle' }}>
                                        <Link to="/register" className="btn btn-sm btn-primary">Register</Link>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="body-item mbr-fonts-style display-7" style={{ verticalAlign: 'middle' }}>Oral Presentation</td>
                                    <td className="body-item mbr-fonts-style display-7" style={{ textAlign: 'center', verticalAlign: 'middle' }}>150 | 200</td>
                                    <td className="body-item mbr-fonts-style display-7" style={{ textAlign: 'center', verticalAlign: 'middle' }}>200 | 250</td>
                                    <td className="body-item mbr-fonts-style display-7" style={{ textAlign: 'center', verticalAlign: 'middle' }}>250 | 300</td>
                                    <td className="body-item mbr-fonts-style display-7" style={{ textAlign: 'center', verticalAlign: 'middle' }}>
                                        <Link to="/register" className="btn btn-sm btn-primary">Register</Link>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <p align="center" style={{ paddingTop: '50px' }}>Note: All prices are in USD</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeeStructure;
