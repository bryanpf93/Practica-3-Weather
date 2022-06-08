import { useEffect, useState } from 'react';
import Cards from '../cards';
import Mapa from '../map';
import Pictures from '../pictures';
import Waves from '../../assets/waves.png';
// import 'leaflet/dist/leaflet.css';
import '../../assets/bootstrap.css';

import './styles.css'

function Main() {

    const [geoCode, setGeoCode] = useState([])
    const [text, setText] = useState('')

    const REACT_API_KEY = process.env.REACT_APP_API_KEY;

    // useEffect geolocalización

    useEffect(() => {

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                const lat = position.coords.latitude;
                const lon = position.coords.longitude;
                setGeoCode([{ lat, lon }])
            })
        }
    }, [])
    
    

    

    useEffect(() => {
        if (text) {
            fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${text}&limit=5&appid=${REACT_API_KEY}&lang=sp,es`)
                .then(res => res.json())
                .then(data => setGeoCode(data))
        }
    }, [text])


    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            setText(e.target.value.toLowerCase())
        }

    }

    // console.log('geoCode', geoCode);

    return (
        <>
            <div className='mainContainer'>
                <div className='container'>
                    <div className='container-pic'>
                        <img className='waves' src={Waves}/>
                        <div className='searchbar'>
                            <div className='row justify-content-center'>
                                <input
                                    className='input'
                                    onKeyPress={handleKeyPress}
                                    type='text'
                                    placeholder='Introduce una localidad...'></input>
                            </div>
                        </div>
                        {geoCode.length === 0
                            ? <p>Cargando...</p>
                            : (
                                <div className='content justify-content-center'>
                                    <Cards geoCode={geoCode} text={text}></Cards>
                                    <div className='row justify-content-center'>
                                        <p className='site-map'>MAPA DEL SITIO</p>
                                        <div className='container-map' >
                                            <Mapa geoCode={geoCode}></Mapa>
                                        </div>
                                    </div>
                                    { geoCode[0]?.name === "Tarifa" || geoCode[0]?.name === "Dakar" || geoCode[0]?.name === "Laredo" || geoCode[0]?.name === "Santander" 
                                        ?<div className='row justify-content-center'>
                                            <p className='pictures-site'>FOTOS DEL SITIO</p>
                                            <Pictures></Pictures>
                                        </div>
                                    :""}
                                    
                                    <div className="fondo"></div>
                                </div>
                            )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Main;