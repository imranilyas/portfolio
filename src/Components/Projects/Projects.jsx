import React, { useState } from 'react';
import './Projects.css';
import '../Components.css';
import Modal from 'react-modal';

const Projects = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [modalPhoto, setModalPhoto] = useState('');
    const [altPhotoName, setAltPhotoName] = useState('');

    const openModal = (num) => {
        console.log(num);
        const img = document.getElementsByClassName('project-photo')[num];
        setModalPhoto(img.getAttribute('src'));
        setAltPhotoName(img.getAttribute('alt'));
        console.log(modalPhoto);
        setModalOpen(true);
    }
    const closeModal = () => {
        setModalOpen(false);
    }

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'transparent',
            border: 0,
        },
    }

    return (
        <div className = 'container'>
            <h1 className = 'page-title'>Projects</h1>
            <div className = 'project-all'>
                <div className = 'project-container'>
                    {/* Project Title */}
                    <a className = 'project-link' href = 'https://github.com/imranilyas/genshin-frontend' target = '_blank' rel = 'noreferrer'>
                        <h2 className = 'project-title'>GenDrops</h2>
                    </a>
                    <div className = 'project-info'>
                        {/* Left Side Photo that can be enlarged */}
                        <img className = 'project-photo' src = 'project-photos/AllDropsScreen.png' alt = 'GenDrops Main Screen' onClick = {() => openModal(0)}/>
                        {/* Right Side Description of the project */}
                        <p className = 'project-description'>
                            GenDrops is a React Native mobile application inspired by the game Genshin Impact designed for players
                            to learn more information about specific monster drops. The user may add, edit, view, and delete a monster drop from the NoSQL database.
                            A fun feature this app has is a dark mode triggered by a switch.
                        </p>
                    </div>
                </div>
                <div className = 'project-container'>
                    {/* Project Title */}
                    <a className = 'project-link' href = 'https://github.com/imranilyas/frontend' target = '_blank' rel = 'noreferrer'>
                        <h2 className = 'project-title'>Personnel Placement</h2>
                    </a>
                    <div className = 'project-info'>
                        {/* Left Side Photo that can be enlarged */}
                        <img className = 'project-photo larger-photos' src = 'project-photos/MainBatchScreen.png' alt = 'Revature Product Placement Main Screen' onClick = {() => openModal(1)}/>
                        {/* Right Side Description of the project */}
                        <p className = 'project-description'>
                            P<sup>3</sup> is a mobile application designed for Revature Managers to place an order of associates
                            to a demand from a client. This is a team-wide project with which I was assigned to the Trainers' Screen where the user may add, edit, or delete a trainer.
                        </p>
                    </div>
                </div>
                <div className = 'project-container'>
                    {/* Project Title */}
                    <a className = 'project-link' href = 'https://github.com/imranilyas/team-4-Project-2-FE' target = '_blank' rel = 'noreferrer'>
                        <h2 className = 'project-title'>Scouter Mobile</h2>
                    </a>
                    <div className = 'project-info'>
                        {/* Left Side Photo that can be enlarged */}
                        <img className = 'project-photo larger-photos' src = 'project-photos/ScouterHomeScreen.png' alt = 'Scouter Main Feed Screen' onClick = {() => openModal(2)}/>
                        {/* Right Side Description of the project */}
                        <p className = 'project-description'>
                            Scouter is a Serverless, Android-first social media application designed to be a community for Anime viewers.
                            The user may post an image and/or comment and all their followers will see their post in their main feed, which is just one of Scouter's many functions.
                        </p>
                    </div>
                </div>
            </div>
            <Modal
                isOpen={modalOpen}
                onRequestClose={closeModal}
                style={customStyles}
            >
                <img className = 'modal-photo' src = {modalPhoto} alt = {altPhotoName}/>
            </Modal>
        </div>
    )
}

export default Projects;