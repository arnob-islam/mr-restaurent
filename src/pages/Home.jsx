import React from 'react'
import Hero from './Hero';
import AboutUs from './AboutUs';
import Service from './Service';
import FoodCover from './FoodCover';
import Menu from './Menu';
import ExclusiveFood from './ExclusiveFood';
import Team from './Team';
import Testimonial from './Testimonial';
import ContectForm from './ContectForm';
import ContectUs from '../components/ContectUs';
import Footer from '../components/Footer';
const Home = () => {
    return (
        <>
            <Hero />
            <AboutUs />
            <Service />
            <FoodCover />
            <Menu />
            <ExclusiveFood />
            <Team />
            <Testimonial />
            <ContectForm />
            <ContectUs />
            <Footer />
        </>
    )
}

export default Home
