import React, {useState} from 'react';
import Modal from './component/modal/Modal';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Map from './component/map/Map';
import MapImage from './component/map/Mapimage';
import Navbar from './component/navbar/Navbar';
import ExtractMap from './component/map/ExtractMap';

function App() {
  const [show, setShow] = useState(false);
  const msgs = ['hello', 'there', 'user'];
  return (
    <div className='app'>
      {/* <Router>
        <Routes>
          
        </Routes>
      </Router> */}
      {/* <ExtractMap/> */}
      {/* <Map/> */}
      {show && <Modal setIsOpen={setShow} msgs={msgs} />}
      <Navbar setOpenInstructions={setShow}/>
      <MapImage/>
      </div>
  );
}

export default App;
