import React from 'react';
import { Link } from 'react-scroll';
import '../components/style.css';
import { Image } from 'react-bootstrap';
import Scissors from '../images/scissors.png';
import MobileMenu from './MobileMenu';


const Dashboard = () => {
    return (
        <div className='dashShell' >
            <MobileMenu />
            <div className='dashList'>
                <Link to='about' smooth={true} duration={500} >About Me</Link>
                <br /><br /><br /><br />
                <Image className='scissors' src={Scissors} alt='...' />
                <br />
                <Link to='pricing' smooth={true} duration={500}>Services</Link>
                <br />
                <Image className='scissors' src={Scissors} alt='...' />
                <br />
                <Link to='specialties' smooth={true} duration={500}>Specialties</Link>
                <br /><br />
            </div>
            <div>
                <p className='dashName'>AC</p>
            </div>
            <div className='dashList'>
                <Link to='promotions' smooth={true} duration={500} >Promotions</Link>
                <br />
                <Image className='scissors' src={Scissors} alt='...' />
                <br />
                <Link to='giftCards' smooth={true} duration={500}>Gift Cards</Link>
                <br />
                <Image className='scissors' src={Scissors} alt='...' />
                <br />
                <Link to='contact' smooth={true} duration={500}>Contact</Link>
                <br /><br />
            </div>
        </div >
    )
}

export default Dashboard;