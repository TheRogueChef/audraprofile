import React from 'react';
import { Link } from 'react-scroll';
import '../components/style.css';
import { Image } from 'react-bootstrap';
import ALogo from '../images/ALogo.png';
import ACpic from '../images/ACPic.jpg';


const Dashboard = () => {
    return (
        <div className='dashShell' >
            <div className='dashName'>
                <Image className='ALogo' src={ALogo} alt='...' />
                <h1>Audra Carlson</h1>
            </div>
            <div className='dashList'>
                <Link to='about' smooth={true} duration={500} >About Me</Link>
                <Link  to='projects' smooth={true} duration={500}>Portfolio</Link>
                <Link to='techSkills' smooth={true} duration={500}>Pricing</Link>
                <Link to='education' smooth={true} duration={500}>Education</Link>
                <Link to='experience' smooth={true} duration={500}>Experience</Link>
                <Link to='contact' smooth={true} duration={500}>Contact</Link>
            </div>
                <Image className='AMpic' src={ACpic} alt='...' />
        </div >
    )
}

export default Dashboard;