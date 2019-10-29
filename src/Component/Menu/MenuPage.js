import React from 'react';
import './MenuPage.css'
import { slide as Menu } from 'react-burger-menu'

export default class MenuPage extends React.Component{
    state={
        menuOpen: false
    }

    handleStateChange (state) {
        this.setState({menuOpen: state.isOpen})  
      }
      closeMenu () {
        this.setState({menuOpen: false})
      }
    render(){
        return(
            <div id="outer-container">
                    <Menu 
                    isOpen={this.state.menuOpen}
                    onStateChange={(state) => this.handleStateChange(state)}
                    left
                    pageWrapId={ "page-wrap" }
                    outerContainerId={ "outer-container" }

                    >
                        <main id="page-wrap">
                            <a onClick={() => this.closeMenu()} id="bio-id" className="menu-item" href="#bio">Bio</a>
                            <a onClick={() => this.closeMenu()} id="portfolio-id" className="menu-item" href="#portfolio">Portfolio</a>
                            <a onClick={() => this.closeMenu()} id="contact-id" className="menu-item" href="#contact">Contact</a>
                            <a onClick={() => this.closeMenu()} id="github" className="menu-item" target="_blank" rel="noopener noreferrer" href="https://github.com/kckhafra">Github</a>
                            <a onClick={() => this.closeMenu()} id="linkedin" className="menu-item" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/kuntcheramen-khafra-5840b2108/">LinkedIn</a>
                            <a onClick={() => this.closeMenu()} className="menu-item" target="_blank" rel="noopener noreferrer" href="mailto:kckhafra@gmail.com"> Email</a>
                        </main>
                    </Menu>
                </div>
        )
    }
} 