import React from 'react'
import './Header.css'
import Menu from '../Menu/MenuPage'


export default class Header extends React.Component{
    render(){
        return(
            <div>
                
                    <nav className="nav">
                        <div className="menu">
                        <Menu/>
                        </div>
                        <a className="nav-text" href="#bio"><strong className="my-name">KC Khafra</strong></a>
                        <div className= "right-navlinks ">
                            <a className="nav-text hiddennav" href="#bio"><strong className="other-navlinks">Bio</strong></a>
                            <a className="nav-text hiddennav" href="#portfolio"><strong className="other-navlinks">Portfolio</strong></a>
                            <a className="nav-text hiddennav" href="#contact"><strong className="other-navlinks">Contact</strong></a>
                            <a className="nav-text hiddennav" target="_blank" rel="noopener noreferrer" href="https://github.com/kckhafra"><strong className="other-navlinks">Github</strong></a>
                            <a className="nav-text hiddennav" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/kuntcheramen-khafra-5840b2108/"><strong className="other-navlinks">LinkedIn</strong></a>
                            <a className="nav-text hiddennav" target="_blank" rel="noopener noreferrer" href="mailto:kckhafra@gmail.com"><strong className="other-navlinks"> Email</strong></a>
                            
                        </div>
                        </nav>
                        <section className="background">
                            <div className="text-container">
                                    <h1 className="background-text">CODING IS A GAME</h1>
                                    <p className="background-text">I Thoroughly Enjoy</p>
                            </div> 
                        </section>
            </div>
        )
    }
}