import React, {useState} from 'react';
import Modal from '../modal/Modal';
import "./Navbar.css";
import eventBus from '../eventBus/EventBus';
import image from '../../images/image.jpg';


const Navbar = (props) => {
    // const goToCurrentLocation = () => {
    //     eventBus.emit('goToCurLoc', 'Hello from navbar');
    // }

    return (
        <div className='custom-navbar'>
            <div className = 'nav-logo'>
                <img src={image} className = 'nav-logo-image'></img>
            </div>
            <div className = 'nav-title'>
                Land Cover Classification
            </div>
            <div className = 'nav-menu'>
                <div className = 'custom-navbar-item' onClick={() => props.setViewToMap([true, false, false])}>
                    Home
                </div>
                <div className = 'custom-navbar-item' onClick={() => props.setViewToMap([false, false, true])}>
                    Classify
                </div>
                <div className = 'custom-navbar-item' onClick={() => props.setViewToMap([false, true, false])}>
                    Map
                </div>
                {/* <div className = 'custom-navbar-item' onClick={goToCurrentLocation}>
                    {isButtonClicked ? 'Reset Map' : 'Current Location'}
                </div> */}
                {/* <div className = 'custom-navbar-item' onClick={() => props.setOpenInstructions(true)}>
                    Instructions
                </div> */}
            </div>
        </div>
    )
}

export default Navbar;
