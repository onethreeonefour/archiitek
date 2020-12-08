import React from 'react'

function Contact() {
    return (
        <div className="contact-container">
            <div className="contact-form">
                <h1>Find Your Next Project With Us</h1>
                <button>Get In Touch</button>
                <div className='address'>
                    <div>
                        <h3>Christchurch</h3>
                        <p>1200 Main North Road, Kainga,<br /> Christchurch 8083, <br /> New Zealand </p>
                    </div>
                    <div>
                        <h3>Sydney</h3>
                        <p>62 Oxford St, Sydney,<br /> Sydney 2000, <br /> Australia </p>
                    </div>
                    <div>
                        <h3>Melbourne</h3>
                        <p>865 York St, Melbourne,<br /> Melbourne 3000, <br /> Australia </p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Contact
