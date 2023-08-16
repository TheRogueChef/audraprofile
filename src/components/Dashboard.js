import React from 'react';
import { Link } from 'react-scroll';
import '../components/style.css';
import { Image } from 'react-bootstrap';
import ALogo from '../images/ALogo.png';
import ACpic from '../images/ACPic.jpg';
import Scissors from '../images/scissors.png';


const Dashboard = () => {
    return (
        <div className='dashShell' >
            <div className='dashName'>
                <Image className='ALogo' src={ALogo} alt='...' />
                <h1>Audra Carlson</h1>
            </div>
            <div className='dashList'>
                <Link to='about' smooth={true} duration={500} >About Me</Link>
                <br />
                <Image className='scissors' src={Scissors} alt='...' />
                <br />
                <Link to='pricing' smooth={true} duration={500}>Services</Link>
                <br />
                <Image className='scissors' src={Scissors} alt='...' />
                <br />
                <Link to='contact' smooth={true} duration={500}>Contact</Link>
                <br /><br />
            </div>
                <Image className='AMpic' src={ACpic} alt='...' />
        </div >
    )
}

export default Dashboard;