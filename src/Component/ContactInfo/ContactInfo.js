import React from 'react';
import './ContactInfo.css';


export default class ContactInfo extends React.Component{
    render() {
        return (
            <div className="contact-info" id="contact">
                <h2>Contact Info</h2>
                <section className = "contact-section" >
                            <div className="contact-links-div">Github<a className="contact-links" target="_blank" rel="noopener noreferrer" href="https://github.com/kckhafra"><strong className="other-navlinks">https://github.com/kckhafra</strong></a></div>
                            <div className="contact-links-div">LinkedIn<a className="contact-links"  target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/kckhafra/"><strong className="other-navlinks">https://www.linkedin.com/in/kckhafra/</strong></a></div>
                            <div className="contact-links-div">Email<a className="contact-links"  target="_blank" rel="noopener noreferrer" href="mailto:kckhafra@gmail.com"><strong className="other-navlinks">kckhafra@gmail.com</strong></a></div>
                </section>
            </div>
        );
    }
}


