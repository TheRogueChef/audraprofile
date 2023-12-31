import React from 'react';
import '../components/style.css';
import { Image } from 'react-bootstrap';
import ACpic from '../images/ACPic.jpg';



const AboutMe = () => {
    return (
        <div className='AMShell'  >
            <div >
                <br />
            <Image className='frame' src={ACpic} alt='...' />
                <div className='AMShellText'>
                    <p>Hello! My name is Audra Carlson and I am a stylist who has been working in the Bellevue area for the past twenty five years. After graduating from the Gene Juarez Advanced Training Center I began work as a designer for Gene Juarez Salon. I soon decided I wanted to study hair color as well.</p>
                    <p>Once I chose to pursue hair color I was fortunate enough to work closely with some top colorists and keep myself current with modern trends by attending many advanced hair color courses. Recently, I just completed nineteen years at Michaels of Bellevue Salon, where I was a lead colorist, stylist, and team mentor.</p>
                    <p>Being a stylist is my passion, and it is so great to be surrounded by other stylists who feel the same, here at Mollie Michelle! It is extremely rewarding to help people look and feel their best. </p>
                    <p>I look forward to meeting you and helping you design your new look!</p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;