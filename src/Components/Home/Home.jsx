import React from "react";
import './Home.css';
import '../Components.css';
import { SiJest, SiJavascript, SiTypescript, SiReact, SiRedux } from 'react-icons/si';


const Home = () => {
    return(
        <div className = 'container'>
            {/* Header */}
            <div className = 'home-title'>
                {/* Photo of myself */}
                <img className = 'profile-picture' src = '/portfolio/profile_pic.png' alt = 'Profile'/>
                {/* Full Name and Job Title */}
                <div className = 'name'>
                    <p className = 'profile-name'>Imran Mohammad Ilyas</p>
                    <p className = 'profile-job'>Software Engineer</p>
                </div>
            </div>
            {/* Summary */}
            <p className = 'home-summary'>Cloud Native / React Native Software Developer/Engineer working 
            for Cognizant under Revature with 2 years of industry equivalent experience.</p>
            {/* Icons of experience */}
            <div className = 'home-icons-container'>
                <SiReact className = 'home-icons' color = '#61DBFB' title = 'React Icon'/>
                <SiRedux className = 'home-icons' color = '#764abc' title = 'Redux Icon' />
                <SiJavascript id = 'js-icon' className = 'home-icons' color = '#F0DB4F' title = 'JavaScript Icon'/>
                <SiTypescript id = 'ts-icon' className = 'home-icons' color = '#007acc' title = 'TypeScript Icon'/>
                <SiJest className = 'home-icons' color = '#BA0000' title = 'Jest Testing Icon' />
            </div>
        </div>
    )
}

export default Home;