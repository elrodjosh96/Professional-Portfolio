import React from 'react';
import coding from '../../images/codingpic.png';
import headshot from '../../images/headshot.png';
// CSS
import '../css/aboutme.css';

export default function AboutMe({ currPage, setCurrPage }) {

    return <div className='container about-me'>
        <div className="card about-me-card">
            <div className='about-me-banner'>
                <img src={coding} className="card-img-top" alt="code" />
            </div>
            <div className="card-body">
                <div className='about-me-left'>
                    <div className='about-me-headshot'>
                        <img src={headshot} className='headshot-img' alt='My Face' />
                    </div>
                    <h5 className="card-title about-me-title">Josh Elrod</h5>
                    
                </div>
                <p className="card-text about-me-text">
                    Hello there! My name is Josh Elrod and I am Full Stack Web-Developer from the North Georgia area. I've worked the past 6 years mainly in Shipping/Receiving with some small accounting here and there. I got into web-development because I wanted to push myself in a new direction I've never been before. I am hopeful that the Georgia Tech Coding Bootcamp will help me in mastering the different languages used on the internet, as well as helping me find a career that I enjoy!
                    <br></br>
                    <br></br>
                    In 2020 I began to discover how I enjoy cooking. I watched the Netflix Documentary, "Salt, Fat, Acid, Heat" for the first time and was immediately mesmerized by the way Samin Nosrat spoke about cooking. From then I decided that I was going to teach myself how to cook. I still enjoy cooking for my wife and I, even if it is just simple meals during the week. My favorite is cooking Traditional Italian dishes. On top of cooking, I am also a HUGE Star Wars nerd, and love to put together Star Wars LEGO sets. My other favorite past time is being a DIE HARD UGA football fan. My blood bleeds red and black! During the season you will always find me at my house in my lucky spot screaming at the TV during every UGA game.
                    
                </p>
            </div>
        </div>
    </div>
};