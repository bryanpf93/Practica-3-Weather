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

    const handleText = e => {
        const val = e.target.value.toLowerCase()
        setText(val)
    }

    useEffect(() => {
        {
            text && fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${text}&limit=5&appid=1426ce2a7fb23a02e2d8aef816d01a76`)
                .then(res => res.json())
                .then(data => setGeoCode(data))
        }
    }, [text])

    return (
        <>  
            <body>
            <div className='mainContainer'>
            <div className='container'>
                <div className='container-pic'>
                    <div className='searchbar'>
                        <div className='row justify-content-center'>
                            <input className='input' onChange={handleText} type='text' placeholder='Introduce una localidad...'></input>
                            <div>{geoCode[0]?.lat}</div>
                            <div>{geoCode[0]?.lon}</div>
                        </div>
                    </div>
                    <div className='content justify-content-center'>
                        <Cards geoCode={geoCode} ></Cards>
                        <div className='row justify-content-center'>
                            <p className='site-map'>MAPA DEL SITIO</p>
                            <div className='container-map' >
                                <Mapa></Mapa>
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