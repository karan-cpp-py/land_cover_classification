import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Map from './component/map/Map';
import MapImage from './component/map/Mapimage';
import ExtractMap from './component/map/ExtractMap';

function App() {
  return (
    <div className='app'>
      {/* <Router>
        <Routes>
          
        </Routes>
      </Router> */}
      {/* <ExtractMap/> */}
      {/* <Map/> */}
      <MapImage/>
      </div>
  );
}

export default App;
