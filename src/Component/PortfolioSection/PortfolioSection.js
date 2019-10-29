import React from 'react';
import './PortfolioSection.css';

export default class PortfolioSection extends React.Component{
    render() {
        return (
            
                <section id="portfolio">
                    
                    <h2 className="portfolio-header">Portfolio</h2>

                    <div className="project-headers-container">
                    <h3 className="project-headers">EcoAcme Social Media App</h3>
                    </div>
                    <div className=" portfolioimg-container">
                    
                        <img alt="portfolio project screenshot" className="portfolio-img" src = "https://raw.githubusercontent.com/kckhafra/KC-Portfolio/master/Pictures/Screen%20Shot%202019-10-20%20at%202.19.44%20PM.png"/>
                    </div>
                    <div className= " portfolio-container">
                        <h4>Description</h4>
                        <p className= "portfolio-text"> EcoAcme is a social media platform that promotes holistic health. Users joining EcoAcme become a part of an online community that encourages healthy eating, strength and conditioning and mental stability. This social networking platform allows users to post events, directly message users, view others profiles and add friends.</p>
                        
                        <h4>Technologies</h4>
                        <p className= "portfolio-text">
                        This app was created with the following technoligies: Javascript, React.js, HTML, CSS, API Request, Node.js, PostgresSQL, Express and MongoDB. The login was authenticated through JSON Web Token(JWT). Database stored at Heroku
                        </p>
                    </div>
                    
                    <div className="github-container">
                        <a target="_blank" rel="noopener noreferrer" className= "github-link code-link" href="https://github.com/kckhafra/EcoAcme-Client">Client Code</a>
                        <a target="_blank" rel="noopener noreferrer" className= "github-link code-link" href="https://github.com/kckhafra/EcoAcme-API">API Code</a>
                        <a target="_blank" rel="noopener noreferrer" className= "github-link livepage-link" href="https://ecoacme-app.kckhafra.now.sh/">Live Page</a>
                    </div>

                    <div className="space-portfolio "></div>
                    <div className="project-headers-container">
                    <h3 className="project-headers">Holistic Health Shop</h3>
                    </div>
                    <div className= "portfolioimg-container" >
                    
                        <img alt="portfolio project screenshot" className="portfolio-img" src="https://raw.githubusercontent.com/kckhafra/holistic-shopping-client/master/Pictures/Screen%20Shot%202019-09-26%20at%2011.48.57%20AM.png"/>
                    </div>
                    <div className= "portfolio-container">
                        <h4>Description</h4>
                        <p className= "portfolio-text">Health is the most important aspect of human existence. Only when one is healthy can they experience life to the fullest. Holistic Health Store is an online platform that allow selllers to store, post and manage their holistic products for sell. </p>
                        
                        <h4>Technologies</h4>
                        <p className= "portfolio-text">
                        This app was created with the following technoligies: Javascript, React.js, HTML, CSS, API Request, Node.js, PostgresSQL, Express and MongoDB. The login was authenticated through JSON Web Token(JWT). Database stored at Heroku      </p>
                    </div>

                    <div className="github-container">
                        <a target="_blank" rel="noopener noreferrer" className= "github-link code-link" href="https://github.com/kckhafra/holistic-shopping-client">Client Code</a>
                        <a target="_blank" rel="noopener noreferrer" className= "github-link code-link" href="https://github.com/kckhafra/holistic-shopping-api">API Code</a>
                        <a target="_blank" rel="noopener noreferrer" className= "github-link livepage-link" href="https://holistic-client.kckhafra.now.sh/">Live Page</a>
                    </div>
                    <div className="space-portfolio"></div>
                    <div className="project-headers-container">
                    <h3 className="project-headers">Venue Locator</h3>
                    </div>
                    <div className= "portfolioimg-container" >
                    
                        <img alt="portfolio project screenshot" className="portfolio-img" src="https://raw.githubusercontent.com/kckhafra/Venue-Locator/master/pics/Screen%20Shot%202019-05-10%20at%209.17.19%20AM.png"/>
                    </div>
                    <div className= "portfolio-container">
                        <h4>Description</h4>
                        <p className= "portfolio-text">Planning a trip to Paris and want to find a great restauraunt, or maybe you want to do some sight seeing in Egypt? Regardless of where you plan to go and what type of venue you prefer, Venue Locator is the website to use. Just add your address, the radius in which you want to search, the time of day, and type of venue and you will have reccomendations displayed to you on a map. </p>
                        
                        <h4>Technologies</h4>
                        <p className= "portfolio-text">
                        This app was created with the following technoligies: Javascript, jQuery, HTML, CSS, and API request.</p>
                    </div>

                    <div className="github-container">
                        <a target="_blank" rel="noopener noreferrer" className= "github-link code-link" href="https://github.com/kckhafra/Venue-Locator.git">Code</a>
                        <a target="_blank" rel="noopener noreferrer" className= "github-link livepage-link" href="https://kckhafra.github.io/Venue-Locator/">Live Page</a>
                    </div>

                </section>
           
        );
    }
}


