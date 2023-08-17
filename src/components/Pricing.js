import React from 'react';
import '../components/style.css';


const Pricing = () => {
    return (
        <div className='AMShell'>
            <h1>Services</h1>
            <div className='priceShell'  >
                <div >
                    <div>
                        <h2 style={{ textDecoration: 'underline' }}>Cuts</h2>
                        <p style={{ fontStyle: 'italic' }}>Includes consultation, design, cut, blow dry and style</p>
                    </div>
                        <p>Mens = $50.00</p>
                        <p>Womens = starting at $70.00</p>
                </div>
                <div >
                    <h2 style={{ textDecoration: 'underline' }}>Highlights & Blonding</h2>
                        <p>Full Foil Highlights = starting at $160.00</p>
                        <p>Partial Foil Highlights = starting at $130.00</p>
                        <p>Gloss/Toner with Highlights = $15.00</p>
                        <p>Gloss/Toner, stand alone service = $40.00</p>
                        <p>Bleach & Tone = starting at $250.00</p>
                        <p style={{ fontStyle: 'italic' }}>Includes strengthening treatment</p>
                </div>
                <div >
                    <h2 style={{ textDecoration: 'underline' }}>Hair Color</h2>
                        <p>Root Touch Up = starting at $90.00</p>
                        <p>Custom Fashion Color = starting at $150.00</p>
                </div>
                </div>
<br /><br />
                <div className='priceShell'  >
                    <div>
                            <h2 style={{ textDecoration: 'underline' }}>Corrective Color</h2>
                            <h3>Consultation Required</h3>
                            <p style={{ fontStyle: 'italic' }}>This service can be very involved often requiring several appointments.</p>
                            <p>Service starts at $95.00/hr</p>
                    </div>
                    <div >
                        <h2 style={{ textDecoration: 'underline' }}>Strengthening Treatments</h2>
                            <p>Olaplex = $20.00 - $25.00</p>
                            <p>K-18 = $20.00 - $25.00</p>
                    </div>
                </div>
                <br />
            <div>
                <h5 style={{ fontStyle: 'italic' }}>* Prices may vary based on length and/or thickness. Prices are subject to change *</h5>
            </div>
        </div>
    )
}

export default Pricing;