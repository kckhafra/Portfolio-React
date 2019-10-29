import React from 'react';
import './BioPage.css';


export default class BioPage extends React.Component{
    render() {
        return (
            <div className="bio-page">
                <section className= "bio-section" id="bio">
                    <main role="main" className="main">
                        <h2 className= "bio-header" >Who is KC</h2>
                        <div className="bioimg-container">
                            <img  alt="headshot of Kc" src="https://raw.githubusercontent.com/kckhafra/KC-Portfolio/master/Pictures/IMG-KC-headshot.JPG" className="img-me"/>
                        </div>
                
                        <div className= "bio-container">
                            <p className="bio">I am a <strong className="highlight" >transformative web developer</strong> that brings <strong className="highlight" >passion</strong> and <strong className="highlight" >creativity</strong> to my craft. I love using code to solve complex problems. I love the <strong className="highlight" >logic</strong> behind coding. I love the <strong className="highlight" >feeling of accomplishment</strong> after spending hours trying to figure out a coding problem. Most importantly, I love being apart of a <strong className="highlight" > software devlopment family</strong> that collaborates affectively and builds on each others ideas. Outside of the realm of coding, I am a chess enthusiast, born philosopher, avid reader and a community servant.</p>
                        </div>
                    </main>
                </section>
            </div>
        );
    }
}


