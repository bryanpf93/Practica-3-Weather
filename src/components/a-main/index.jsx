import { useEffect, useState } from 'react';
import Cards from '../cards';
import Mapa from '../map';
import Pictures from '../pictures';
// import 'leaflet/dist/leaflet.css';
import '../../assets/bootstrap.css';

import './styles.css'

function Main() {

    const [geoCode, setGeoCode] = useState([])
    const [text, setText] = useState('')
    const REACT_APP_API_KEY = process.env.REACT_APP_OPENWEATHER_KEY;

    // useEffect geolocalización

    useEffect(() => {

        navigator.geolocation.getCurrentPosition( position => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;

            setGeoCode([lat, lon])

        })

    }, [])

    useEffect(() => {
        {
            text && fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${text}&limit=5&appid=${REACT_APP_API_KEY}`)
                .then(res => res.json())
                .then(data => setGeoCode(data))
        }
    }, [text])

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            setText(e.target.value.toLowerCase())
        }

    }



    return (
        <>  


            <body>
            <div className='mainContainer'>
            <div className='container'>
                <div className='container-pic'>
                    <p className='waves'>WAVES</p>
                    <div className='searchbar'>
                        <div className='row justify-content-center'>
                        <input className='input' onKeyPress={handleKeyPress} type='text' placeholder='Introduce una localidad...'></input>
                            <div>{geoCode[0]?.lat}</div>
                            <div>{geoCode[0]?.lon}</div>
                        </div>
                    </div>
                    <div className='content justify-content-center'>
                        <Cards geoCode={geoCode} ></Cards>
                        <div className='row justify-content-center'>
                            <p className='site-map'>MAPA DEL SITIO</p>
                            <div className='container-map' >
                            <Mapa geoCode={geoCode}></Mapa>
                            </div>
                        </div>
                        <div className='row justify-content-center'>
                            <p className='pictures-site'>FOTOS DEL SITIO</p>
                            <Pictures></Pictures>
                        </div>
                        <div className="fondo"></div>
                    </div>
                </div>
            </div>
            </div>
            </body>



        </>
    )
}

export default Main;