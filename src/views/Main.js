import React from 'react';
import { Element } from 'react-scroll';
import Dashboard from '../components/Dashboard';
import Contact from '../components/Contact';
import AboutMe from '../components/AboutMe';
import '../components/style.css';

const DisplayPage = () => {
    return (
        <div>
            <Element name="top">
                <Dashboard />
            </Element>
            <br/>
            <Element name="about">
                <AboutMe />
            </Element>
            <Element name="contact">
                <Contact />
            </Element>
        </div>
    )
}
export default DisplayPage;