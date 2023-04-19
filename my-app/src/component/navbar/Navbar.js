import React, {useState} from 'react';
import Modal from '../modal/Modal';
import "./Navbar.css";
import eventBus from '../eventBus/EventBus';
import image from '../../images/image.jpg';


const Navbar = (props) => {
    // const goToCurrentLocation = () => {
    //     eventBus.emit('goToCurLoc', 'Hello from navbar');
    // }

    const onSubmit = () => {
        props.blockUI.start('Fetching Satellite Image...');
        new Promise((resolve) => setTimeout(resolve, 5000)).then(() => {
          console.log('5 seconds have passed');
          props.blockUI.end();
          props.setViewToMap([false, false, false, true])
        });
    }

    return (
        <div className='custom-navbar'>
            <div className = 'nav-logo'>
                <img src={image} className = 'nav-logo-image'></img>
            </div>
            <div className = 'nav-title'>
                Land Cover Classification
            </div>
            <div className = 'nav-menu'>
                <div className = 'custom-navbar-item' onClick={() => props.setViewToMap([true, false, false, false])}>
                    Home
                </div>
                <div className = 'custom-navbar-item' onClick={() => props.setViewToMap([false, true, false, false])}>
                    Map
                </div>
                {props.currentShowMenu[1] && <div className = 'custom-navbar-item' onClick={onSubmit}>
                    Submit
                </div>}
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
