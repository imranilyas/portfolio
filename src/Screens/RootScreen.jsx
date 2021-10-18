import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// Icons
import { MdHome, /*MdWork,*/ MdEmail } from 'react-icons/md';
import { IoMdContact } from 'react-icons/io';
import { CgNotes } from 'react-icons/cg';

// Components and styling
import Contact from "../Components/Contact/Contact";
import Home from "../Components/Home/Home";
// import Experience from "../Components/Experience/Experience";
import Projects from "../Components/Projects/Projects";
import Background from "../Components/Background/Background";
import './RootScreen.css';

const RootScreen = () => {
    return(
        <>
            <Router className = 'wholescreen'>
                {/* Navbar on the left side */}
                <div className = 'left'>
                    <Link to='/portfolio' className = 'link'>
                        <div className = 'whole-icon'>
                            <MdHome className = 'icons'/> 
                            <p className = 'description'>Home</p>
                        </div>
                    </Link>

                    <Link to='/portfolio/background' className = 'link'>
                        <div className = 'whole-icon'>
                            <IoMdContact className = 'icons'/>
                            <p className = 'description'>Background</p>
                        </div>
                    </Link>

                    {/* Will Add this section when I have worked at more companies */}
                    {/* Will fill it with pressable logos of each company */}
                    {/* <Link to='/experience' className = 'link'>
                        <div className = 'whole-icon'>
                            <MdWork className = 'icons'/>
                            <p className = 'description'>Experience</p>
                        </div>
                    </Link> */}

                    <Link to='/portfolio/projects' className = 'link'>
                        <div className = 'whole-icon'>
                            <CgNotes className = 'icons' />
                            <p className = 'description'>Projects</p>
                        </div>
                    </Link>

                    <Link to='/portfolio/contact' className = 'link'>
                        <div className = 'whole-icon'>
                            <MdEmail className = 'icons'/>
                            <p className = 'description'>Contact</p>
                        </div>
                    </Link>
                </div>
                
                {/* Content on the right side of the screen */}
                <div className = 'right'>
                    <Switch>
                        <Route exact path = '/portfolio'>
                            <Home />
                        </Route>    
                        <Route path = '/portfolio/background'>
                            <Background />
                        </Route>
                        <Route path = '/portfolio/projects'>
                            <Projects />
                        </Route>
                        <Route path = '/portfolio/contact'>
                            <Contact />
                        </Route>
                        {/* <Route path = '/portfolio/experience'>
                            <Experience />
                        </Route> */}
                    </Switch>
                </div>
            </Router>
        </>
    )
}

export default RootScreen;