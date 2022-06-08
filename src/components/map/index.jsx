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

    const losLances = [36.0113732, -5.6105892];
    const laIslaTarifa = [36.0053173, -5.6090722];
    const laCaleta = [36.0121087, -5.5975635];
    const laSalve = [43.41992, -3.4391585];
    const santona = [43.4393013, -2.4496995];
    const sardinero = [43.4730049, -3.7815586];
    const matalenas = [43.486516, -3.7875115];
    const losPeligros = [43.4648138, -3.7801811];
    const voileDor = [14.6999242, -17.4217496];
    const ouakam = [14.7151415, -17.4908888];
    const easterEgg = [14.7015017, -17.4789302];
    

    return (
        <MapContainer key={JSON.stringify(location)} className='map' center={location} zoom={13} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={losLances}>
                <Popup>
                    Playa de los Lances
                </Popup>
            </Marker>
            <Marker position={laIslaTarifa}>
                <Popup>
                    Playa de la Isla de Tarifa
                </Popup>
            </Marker>
            <Marker position={laCaleta}>
                <Popup>
                    Playa de la Caleta
                </Popup>
            </Marker>
            <Marker position={laSalve}>
                <Popup>
                    Playa la Salvé
                </Popup>
            </Marker>
            <Marker position={santona}>
                <Popup>
                    Playa de Santoña
                </Popup>
            </Marker>
            <Marker position={sardinero}>
                <Popup>
                    Playa del Sardinero
                </Popup>
            </Marker>
            <Marker position={matalenas}>
                <Popup>
                    Playa de Mataleñas
                </Popup>
            </Marker>
            <Marker position={losPeligros}>
                <Popup>
                    Playa de los Peligros
                </Popup>
            </Marker>
            <Marker position={voileDor}>
                <Popup>
                    Plage de la Voile d'Or
                </Popup>
            </Marker>
            <Marker position={ouakam}>
                <Popup>
                    Plage Ouakam
                </Popup>
            </Marker>
            <Marker position={easterEgg}>
                <Popup>
                    Cómo va eso Alex 
                </Popup>
            </Marker>
            <Marker position={location}>
                <Popup>
                    Estás aquí.
                </Popup>
            </Marker>
        </MapContainer>

    )

}

export default Mapa;