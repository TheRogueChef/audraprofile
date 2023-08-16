import React from 'react';
import '../components/style.css';
// import { Link } from 'react-scroll';


const Pricing = () => {
    return (
        <div className='priceShell'  >
            <br />
            <h1>Services</h1>
            <br />
            <div >
                <ul style={{ textAlign: 'inherit', listStyle: 'none'}}>Cuts
                <br /><br />
                    <li>Mens = $50.00</li>
                    <li>Womens = starting at $75.00</li>
                    <li>Kids = $45.00</li>
                </ul>
            </div>
            <div >
                <ul style={{ textAlign: 'inherit', listStyle: 'none'}}>Partial Color
                <br /><br />
                    <li>Mens = $50.00</li>
                    <li>Womens = starting at $75.00</li>
                    <li>Kids = $45.00</li>
                </ul>
            </div>
            <div >
                <ul style={{ textAlign: 'inherit', listStyle: 'none'}}>Full Color
                <br /><br />
                    <li>Mens = $50.00</li>
                    <li>Womens = starting at $75.00</li>
                    <li>Kids = $45.00</li>
                </ul>
            </div>
            <div >
                <ul style={{ textAlign: 'inherit', listStyle: 'none'}}>Perms
                <br /><br />
                    <li>Mens = $50.00</li>
                    <li>Womens = starting at $75.00</li>
                    <li>Kids = $45.00</li>
                </ul>
            </div>
            <div >
                <ul style={{ textAlign: 'inherit', listStyle: 'none'}}>Other Services
                <br /><br />
                    <li>Bang Trim = $25.00</li>
                    <li>Root Touch Up = starting at $45.00</li>
                    <li>Kids = $45.00</li>
                </ul>
            </div>
            {/* <br  />
            <Link to='top' style={{color:'red'}} smooth={true} duration={500}>Back to Top</Link>
            <br  /><br  /> */}
        </div>
    )
}

export default Pricing;