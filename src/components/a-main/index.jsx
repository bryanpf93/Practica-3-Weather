import { useEffect, useState } from 'react';
import Cards from '../cards';
import Mapa from '../map';
import Pictures from '../pictures';
// import 'leaflet/dist/leaflet.css';

import './styles.css'

function Main() {

    const [geoCode, setGeoCode] = useState([])
    const [text, setText] = useState('')

    const handleText = e => {
        const val = e.target.value.toLowerCase()
        setText(val)
    }

    useEffect(() => {
        {
            text && fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${text}&limit=5&appid=${process.env.REACT_APP_API_KEY}`)
                .then(res => res.json())
                .then(data => setGeoCode(data))
        }
    }, [text])

    return (
        <>
            <div>
                <input className='input' onChange={handleText} type='text' placeholder='Introduce una localidad...'></input>
                <div>{geoCode[0]?.lat}</div>
                <div>{geoCode[0]?.lon}</div>

                <Cards geoCode={geoCode} ></Cards>
            </div>
            <p className='site-map'>MAPA DEL SITIO</p>
            <div className='container-map' >
                <Mapa></Mapa>
            </div>
            <p className='pictures-site'>FOTOS DEL SITIO</p>
            <Pictures></Pictures>



        </>
    )
}

export default Main;