import React from "react";
import '../Components.css';
import './Contact.css';

import { MdEmail, MdPhone } from 'react-icons/md';
import { SiGithub } from 'react-icons/si';
import { FaLinkedinIn } from 'react-icons/fa';
import { BsInfoCircleFill } from 'react-icons/bs';

const Contact = () => {
    return(
        <div className = 'container'>
            <h1 className = 'page-title'>Contact</h1>
            <div className = 'contact-container'>
                <a className = 'contact-press-container' href = 'https://www.linkedin.com/in/imran-ilyas' target = '_blank' rel = 'noreferrer'>
                    <FaLinkedinIn className = 'contact-icons press'/>
                </a>
                <a className = 'contact-press-container' href = 'https://github.com/imranilyas' target = '_blank' rel = 'noreferrer'>
                    <SiGithub className = 'contact-icons press'/>                    
                </a>               
            </div>
            <center>
            <div className = 'contact-container'>
                <div className = 'whole-contact-icon'>
                    <MdPhone className = 'contact-icons'/>
                    <p className = 'contact-text'>Cell</p>
                    <p className = 'contact-text'>310-402-4398</p>
                </div>
                <div className = 'whole-contact-icon'>
                    <MdEmail className = 'contact-icons'/>
                    <p className = 'contact-text'>Email</p>
                    <a className = 'contact-text' href = 'mailto: imranilyas2416@berkeley.edu'>imranilyas2416@berkeley.edu</a>
                </div>
                <div className = 'whole-contact-icon'>
                    <BsInfoCircleFill className = 'contact-icons'/>
                    <p className = 'contact-text'>Resume</p>
                    <a className = 'contact-text' href = 'Imran_Ilyas_Resume.pdf' target = '_blank' rel = 'noreferrer'>Click Here</a>
                </div>
            </div>
            </center>
        </div>
    )
}

export default Contact;