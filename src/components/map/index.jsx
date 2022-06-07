import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import './styles.css'
// import 'leaflet/dist/leaflet.css';


function Mapa({geoCode}) {

    console.log(geoCode);

    const location = [43.0468746,-2.2771408];

    if (geoCode[0]) {

        return( 
                    <MapContainer className='map' center={location} zoom={13} scrollWheelZoom={false}>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={[geoCode[0],geoCode[1]]}>
                            <Popup>
                                A pretty CSS3 popup. <br /> Easily customizable.
                            </Popup>
                        </Marker>
                    </MapContainer>

        )
    }
}

export default Mapa;