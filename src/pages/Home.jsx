import React from 'react';
import Hero from '../components/Hero';
import ConferenceTracks from '../components/ConferenceTracks';
import ActionCards from '../components/ActionCards';
import ConferenceChair from '../components/ConferenceChair';
import ScientificCommittee from '../components/ScientificCommittee';
import FeeStructure from '../components/FeeStructure';
import Guidelines from '../components/Guidelines';
import Sponsors from '../components/Sponsors';
import ContactUs from '../components/ContactUs';

const Home = () => {
    return (
        <div style={{ backgroundColor: '#ffffff' }}>
            <Hero />
            <ConferenceTracks />
            <ActionCards />
            <ConferenceChair />
            <ScientificCommittee />
            <FeeStructure />
            <Guidelines />
            <Sponsors />
            <ContactUs />
        </div>
    );
};

export default Home;
