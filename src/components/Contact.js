import React from 'react';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import phone from '../images/phone.png';
import Email from '../images/Email.png';
import MMLogo from '../images/MMLogo.png';
import InstaLogo from '../images/InstaLogo.png';

import '../components/style.css';


const Contact = () => {
    return (
        <div className='contShell'>
            <br />
            <div>
                <a href='https://www.molliemichelle.com/' target='_blank' rel='noopener noreferrer'>
                    <Image className='contactlogo' src={MMLogo} alt='...' />
                </a>
                <p>12121 Northup Way / suite 214 / Bellevue, WA 98005</p>
                <Link style={{ color: 'white', textDecoration: 'none', fontSize: '1.5rem', fontStyle: 'italic' }} to='/MapPage' target='_blank'>Map & Directions</Link>
            </div>
            <br /><br />
            <div>
                <a style={{ color: 'white', textDecoration: 'none' }} href='mailto:audracarlson12@comcast.net'>
                    <Image className='contactlogo' src={Email} alt='...' />
                    <h3 style={{ marginTop: '-.65%' }}>audracarlson12@comcast.net</h3>
                </a>
            </div>
            <br />
            <div>
                <a href='tel:425-765-7065'>
                    <Image className='contactlogo' src={phone} alt='...' />
                </a>
                <h3 style={{ marginTop: '-.2%' }}>425-765-7065</h3>
            </div>
            <br />
            <div>
                <a target='_blank' rel='noopener noreferrer' style={{ color: 'white', textDecoration: 'none' }} href='https://www.instagram.com/audrahairdesign/' >
                    <Image className='contactlogo' src={InstaLogo} alt='...' />
                    <h3 style={{ marginTop: '-.2%' }}>@audrahairdesign</h3>
                </a>
            </div>
        </div>
    );
}

export default Contact;
