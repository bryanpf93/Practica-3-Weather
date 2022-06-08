import { useEffect, useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import './styles.css'
// import 'leaflet/dist/leaflet.css';


function Mapa({ geoCode }) {

    const [location, setLocation] = useState([43.0468746, -2.2771408]);

    useEffect(() => {
        if (geoCode && geoCode.length > 0) {
            setLocation([geoCode[0].lat, geoCode[0].lon])
        }
    }, [geoCode])

    const locationTwo = [36.17704, -5.98185];

    

    return (
        <MapContainer key={JSON.stringify(location)} className='map' center={location} zoom={13} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={location}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
            <Marker position={locationTwo}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>

    )

}

export default Mapa;