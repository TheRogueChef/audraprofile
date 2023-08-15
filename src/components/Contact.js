import React from 'react';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import phone from '../images/phone.png';
import Email from '../images/Email.png';
import MMLogo from '../images/MMLogo.png';
import '../components/style.css';


const Contact = () => {
    return (
        <div className='contShell'>
            <div>
                <a href='tel:425-765-7065'>
                    <Image className='contactlogo' src={phone} alt='...' />
                </a>
                <p>425-765-7065</p>
            </div>
            <div>
                <a href='https://www.molliemichelle.com/' target='_blank' rel='noopener noreferrer'>
                    <Image className='contactlogo' src={MMLogo} alt='...' />
                </a>
                <p>12121 Northup Way / suite 214 / Bellevue, WA 98005</p>
                <Link to='/MapPage' target='_blank'>Map & Directions</Link>
            </div>

            <div>
                <a href='mailto:audracarlson12@comcast.net'>
                    <Image className='contactlogo' src={Email} alt='...' />
                </a>
                <p>audracarlson12@comcast.net</p>
            </div>
        </div>
    );
}

export default Contact;
