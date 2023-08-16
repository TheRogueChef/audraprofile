import React from 'react';
import { Link } from 'react-router-dom';

const MapPage = () => {
    return (
        <div className= 'mapPage'>
            <iframe
                title="Google Maps"
                width="95%"
                height="600"
                frameBorder="0"
                style={{ border: '.25rem solid black', marginTop: '1rem' }}
                src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d86041.42114568061!2d-122.26085046582412!3d47.63012749850935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x54906741b6073dc3%3A0x1d6d642e00a5caa0!2sMollie%20Michelle%20Boutique%20Salon%20-%2012121%20Northup%20Way%20Suite%20214%20-%20Bellevue%2C%20WA%2098005!3m2!1d47.630157!2d-122.17845!5e0!3m2!1sen!2sus!4v1692218885404!5m2!1sen!2sus"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <br />
            <Link to='/' >Home</Link>
        </div>
    );
}

export default MapPage;













