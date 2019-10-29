import React from 'react';
import './PhilosophySection.css';


export default class PhilosophySection extends React.Component{
    render() {
        return (
            <section id="philosophy">
            <h2 class="philo-header">Philosophy</h2>
            <div class = "philo-container">
                <p class = "philosophy-text"> 
                    Coding is not just a hobby or career for me, it is a gateway to finding the secrets of the world and who we are as humans. Creating intricate web pages that allow people to  <strong class="highlight" >communicate</strong> with each other around the world,  <strong class="highlight" >gathering</strong> data to understand more about the world we live in and the people that inhabit it, and obtaining snapshots of other people's  <strong class="highlight" >culture and traditions</strong> will not only give us the power to  <strong class="highlight" >coexist and collaborate</strong>, but with this harmonious spirit just a click away, software development gives us the power to  <strong class="highlight" >uncover the truths</strong> about the world. 
                    <br/>
                    <br/>
                    I think it is with technology that we will solve the  <strong class="highlight" >world problems</strong>. It is with technology where we as people will reach our  <strong class="highlight" >fullest potential</strong>. 
                </p>
            </div>
        </section>
        );
    }
}


