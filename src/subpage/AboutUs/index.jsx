import React from 'react'
import Hero from './Hero'
import About from './About';
import Service from './Service';
import AboutCover from './AboutCover';
import ContectUs from '../../components/ContectUs';
import Footer from '../../components/Footer';

const Index = () => {
    return (
        <>
            <Hero />
            <About />
            <Service />
            <AboutCover />
            <ContectUs />
            <Footer />
        </>
    )
}

export default Index
