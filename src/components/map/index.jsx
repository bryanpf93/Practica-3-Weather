import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import './styles.css'
// import 'leaflet/dist/leaflet.css';


function Mapa(){

    return( 
                  <MapContainer className='map' center={[41.3828939,2.1774322]} zoom={13} scrollWheelZoom={false}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[41.3828939,2.1774322]}>
                        <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>
                </MapContainer>

    )
}

export default Mapa;