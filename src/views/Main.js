import React from 'react';
import { Element } from 'react-scroll';
import Dashboard from '../components/Dashboard';
import Contact from '../components/Contact';
import AboutMe from '../components/AboutMe';
import Blank from '../components/Blank';
import PopupComponent from '../components/PopupComponent';
import Pricing from '../components/Pricing';
import ScrollToTopButton from '../components/ScrollToTopButton';
import Specialties from '../components/Specialties';
import Promotions from '../components/Promotions';
import GiftCards from '../components/GiftCards';
import '../components/style.css';

const DisplayPage = () => {
    return (
        <div>
            <Element name="top">
                <Dashboard />
            </Element>
            <Element name="blank">
                <Blank />
            </Element>
            <Element name="about">
                <AboutMe />
            </Element>
            <Element name="blank">
                <Blank />
            </Element>
            <Element name="specialties">
                <Specialties />
            </Element>
            <Element name="blank">
                <Blank />
            </Element>
            <Element name="pricing">
                <Pricing />
            </Element>
            <Element name="blank">
                <Blank />
            </Element>
            <Element name="promotions">
                <Promotions />
            </Element>
            <Element name="blank">
                <Blank />
            </Element>
            <Element name="giftCards">
                <GiftCards />
            </Element>
            <Element name="blank">
                <Blank />
            </Element>
            <Element name="schedule">
                <PopupComponent />
            </Element>
            <Element name="contact">
                <Contact />
            </Element>
            <ScrollToTopButton />
        </div>
    )
}
export default DisplayPage;