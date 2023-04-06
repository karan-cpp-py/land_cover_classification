import React, {useState} from 'react';
import Modal from '../modal/Modal';
import "./Navbar.css";
import eventBus from '../eventBus/EventBus';


const Navbar = (props) => {
    const [isButtonClicked, setIsButtonClicked] = useState(false);

    const goToCurrentLocation = () => {
        setIsButtonClicked(!isButtonClicked);
        eventBus.emit('goToCurLoc', 'Hello from navbar');
    }

    return (
        <div className='navbar'>
            <div className = 'navbar-item' style={{height: 12+'%', borderStyle: 'none'}}>
                Logo and Name
            </div>
            <div className = 'navbar-item' style={{borderTop: 'solid '+3+'px'}}>
                Home
            </div>
            <div className = 'navbar-item'>
                Search
            </div>
            <div className = 'navbar-item' onClick={goToCurrentLocation}>
                {isButtonClicked ? 'Reset Map' : 'Current Location'}
            </div>
            <div className = 'navbar-item'>
                Classify
            </div>
            <div className = 'navbar-item' onClick={() => props.setOpenInstructions(true)}>
                Instructions
            </div>
        </div>
    )
}

export default Navbar;
