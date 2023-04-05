import React, { useState, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap, FeatureGroup } from 'react-leaflet';
import { EditControl } from "react-leaflet-draw";
import GoogleMapsTileLayer from 'google-map-react';
import "./Map.css";
import "leaflet-draw/dist/leaflet.draw.css";
import L from "leaflet";
import useGeoLocation from '../hook/useGeolocation';
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const mapStyles = {width: '100%',height: '100%'};

function MapFlyTo({ coords, isButtonClicked }) {
    const map = useMap();
    if (isButtonClicked) {map.flyTo(coords, 8);}
    return null;
}
const Map = () => {
    const [center, setCenter] = useState({ lat: 13.084622, lng: 80.248357 });
    const [mapLayers, setMapLayers] = useState([]);
    const [isButtonClicked, setIsButtonClicked] = useState(false);
    const ZOOM_LEVEL = 4;
    const mapRef = useRef();
    const location = useGeoLocation();

    const handleButtonClick = () => {setIsButtonClicked(!isButtonClicked);};

    const _onCreate = (e) => {
        console.log(e);

        const { layerType, layer } = e;
        if (layerType === "rectangle") {
            const { _leaflet_id } = layer;

            setMapLayers((layers) => [
                ...layers,
                { id: _leaflet_id, latlngs: layer.getLatLngs()[0] },
            ]);
        }
    };

    const _onEdited = (e) => {
        console.log(e);
        const {
            layers: { _layers },
        } = e;

        Object.values(_layers).map(({ _leaflet_id, editing }) => {
            setMapLayers((layers) =>
                layers.map((l) =>
                    l.id === _leaflet_id
                        ? { ...l, latlngs: { ...editing.latlngs[0] } }
                        : l
                )
            );
        });
    };

    const _onDeleted = (e) => {
        console.log(e);
        const {
            layers: { _layers },
        } = e;

        Object.values(_layers).map(({ _leaflet_id }) => {
            setMapLayers((layers) => layers.filter((l) => l.id !== _leaflet_id));
        });
    };

    return (
        <div className='map'>
            <MapContainer center={[13.084622, 80.248357]} zoom={4} scrollWheelZoom={false} style={mapStyles} mapType='hybrid'>
                <FeatureGroup>
                    <EditControl
                        position="topright" onCreated={_onCreate} onEdited={_onEdited} onDeleted={_onDeleted}
                        draw={{polygon: false,polyline: false,circle: false,circlemarker: false,marker: false,}}
                    />
                </FeatureGroup>
                <TileLayer
                    url="https://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}"
                    maxZoom={20}
                    subdomains={['mt0', 'mt1', 'mt2', 'mt3']}
                />
                {/* <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://api.maptiler.com/maps/hybrid/256/{z}/{x}/{y}.jpg?key=MaT6O8xev0bab98rZqFr"
                /> */}
                {location.loaded && !location.error && (
                    <Marker
                        position={[location.coordinates.lat, location.coordinates.lng,]}
                    ></Marker>
                )}
                <MapFlyTo coords={[location.coordinates.lat,location.coordinates.lng,]} isButtonClicked={isButtonClicked} />
            </MapContainer>
            <button onClick={handleButtonClick}>
                {isButtonClicked ? 'Reset Map' : 'Current Location'}
            </button>
            <div className='child'>
                <pre className="text-left">{JSON.stringify(mapLayers, 0, 2)}</pre>
            </div>
        </div>
    );
}

export default Map;