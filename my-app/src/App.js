import React, { useState, useEffect } from 'react';
import Modal from './component/modal/Modal';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Map from './component/map/Map';
import MapImage from './component/map/Mapimage';
import Classify from './component/classify/Classify';
import Navbar from './component/navbar/Navbar';
import ExtractMap from './component/map/ExtractMap';
import Example from './component/classify/Example';
import Login from './component/login/Login';
import Register from './component/register/Register';
import Home from './component/home/Home';
import eventBus from './component/eventBus/EventBus';

function App() {
  const [show, setShow] = useState(false);
  const [flag, setFlag] = useState(false);
  const msgs = ['hello', 'there', 'user'];
  const [user, setLoginUser] = useState({});



  useEffect(() => {
    const showLogin = (msg) => {
        console.log(msg);
        {/* <Route exact path="/login" element={<Login setLoginUser={setLoginUser} />} ></Route> */}
    };
    eventBus.on('goToLogin', showLogin);

    return () => {
        eventBus.off('goToLogin', showLogin);
    };
}, []);

  return (
    <div className='app'>
      <Router>
        {/* <Home /> */}
        <Routes>
          <Route exact path="/map" element={(user && user._id) ? <Map setLoginUser={setLoginUser} /> : <Login setLoginUser={setLoginUser}/>}></Route>
          <Route exact path="/" element={<Home setLoginUser={setLoginUser}/>} ></Route>
          <Route exact path="/login" element={<Login setLoginUser={setLoginUser} />} ></Route>
          <Route exact path="/register" element={<Register />}></Route>
          <Route exact path="/classify" element={<Example />}></Route>
        </Routes>
      </Router>
      {/* {show && <Modal setIsOpen={setShow} msgs={msgs} />}
      <Navbar setOpenInstructions={setShow}/> */}
      {/* <Classify/> */}
      {/* <Example/> */}
    </div>
  );
}

export default App;
