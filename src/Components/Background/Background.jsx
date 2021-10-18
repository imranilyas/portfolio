import React from "react";
import './Background.css';
import '../Components.css';

const Background = () => {
    return (
        <div className = 'container'>
            <h1 className = 'page-title'>Background</h1>
            {/* Three sections of the page */}
            <div className = 'background-container'>
                <div className = 'background-info'>
                    {/* Image */}
                    <img className = 'background-img' src = 'https://iconape.com/wp-content/png_logo_vector/university-of-california-berkeley-athletic-logo.png' alt = 'Berkeley Logo'/>
                    {/* Description */}
                    <h2 className = 'background-card-header'>Education</h2>
                    <p className = 'background-card-description'>
                        I started <b>El Camino Community College</b> in August 2016 where I studied Biology and Chemistry. Here, I got my Associates' Degree
                        in both subjects. From El Camino, I transferred to the <b>University of California, Berkeley</b> in August 2018.
                        During my first summer session, I took <b>Problem Solving / Problem Design in C++</b> and quickly realized I
                        wanted to proceed with a Computer Science career. Following the C++ course, I took a Data Science course and
                        Software Engineering as a Service before finishing university with a <b>BA in Molecular and Cellular Biology</b> in August 2020.
                    </p>
                </div>

                <div className = 'background-info'>
                    {/* Image */}
                    <img className = 'background-img' src = 'https://i2.wp.com/www.nctai.com/wp-content/uploads/2020/12/s.png?fit=300%2C288&ssl=1' alt = 'Next Capital Tech Logo'/>
                    {/* Description */}
                    <h2 className = 'background-card-header'>Internship</h2>
                    <p className = 'background-card-description'>
                        Following my undergraduate education, I started my internship on September 2020 at <b>Next Capital Tech</b> as an <b>AI Software Engineer</b> under
                        their Vision 13 Department. I worked on an Emotion Recognition Model using Python and OpenCV along with some design and scripting with C# in Unity.
                        The internship gave me more exposure to different technologies, deepining my interest in Computer Science.
                        After my internship ended in January 2021, I spent time studying <b>Java</b>, <b>HTML</b>, and <b>CSS</b> and developed 
                        my own Unity mini-game that I call <b><a className = 'background-link' href = 'https://imranjustarting.itch.io/rocket-precision' target = '_blank' rel = 'noreferrer'>Rocket Precision</a></b> hosted on itch.io.
                    </p>
                </div>

                <div className = 'background-info'>
                    {/* Image */}
                    <img className = 'background-img' src = 'https://www.pinclipart.com/picdir/big/173-1738734_revature-on-twitter-revature-llc-logo-clipart.png' alt = 'Revature Logo'/>
                    {/* Description */}
                    <h2 className = 'background-card-header'>Experience</h2>
                    <p className = 'background-card-description'>
                        On the beginning of June 2021, I was hired by <b>Revature</b> to be an <b>Associate Software Engineer</b>. Here, I trained
                        in Full Stack <b>Cloud Native / React Native</b> for about 11 weeks, during which I worked both individually and with a team
                        on several projects that can be found on my <b><a className = 'background-link' href = 'https://github.com/imranilyas' target = '_blank' rel = 'noreferrer'>GitHub</a></b>. The
                        stack that I trained in consists of <b>Express</b> and <b>DynamoDB</b> in the backend and <b>React</b>, <b>React Native</b>, and <b>Redux</b> on the frontend. I 
                        used <b>JavaScript</b> and <b>TypeScript</b> as the programming language and <b>Jest</b> for testing. Shortly after training, I was picked up by <b>Cognizant</b>, and I now work for them.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Background;