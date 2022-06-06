import { useEffect, useState } from 'react';
import './styles.css'
import logo from "../../assets/olassi.svg"
import Forecast from '../forecast';
import Week from '../week';

function Cards({ geoCode }) {

    const [cities, setCities] = useState({})
    const gps  = [geoCode[0]?.lat,geoCode[0]?.lon];

    useEffect(() => {
        if (geoCode[0]) {
            fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${geoCode[0]?.lat}&lon=${geoCode[0]?.lon}&exclude=hourly,daily&appid=382ffd2ff5479a9032545c1069dcec64`)
                .then(res => res.json())
                .then(data => setCities(data))
        }
    }, [geoCode])

    let date = new Date()
    const today = [date.getDate(), " ", date.getMonth() + 1, " ", date.getFullYear()];
    const kelvin = cities?.current?.temp;
    const celcius = Math.round(kelvin - 273.15);
    const farenheit = Math.round(celcius * 9 / 5 + 32);

    const iconWeather = cities?.current?.weather[0]?.icon;
    
    switch (iconWeather) {
        case 10n:
            
            break;
    
        default:
            break;
    }

    return (

        <>

            <div className='containers-cities'>
                <div style={{ width: 558, height: 500 }}>
                    <p className='title'>{geoCode[0]?.name}</p>
                    <p className='today'>{today}</p>
                    <div className='weather-temperature'>
                        <img style={{ width: 400 }} src={''} alt="" />
                        <div className='celcius-farenheit'>
                            {celcius && <p>{celcius}ºC</p>}
                            {farenheit && <p>{farenheit}ºF</p>}
                        </div>
                    </div>
                </div>
                <div style={{ width: 558, height: 500 }} >
                    <img style={{ width: 476 }} className='logo' src={logo} alt="" />
                </div>
            </div>
            <div>
                <Forecast cities={cities}></Forecast>
                {/* <Week cities={cities}></Week> */}
            </div>
        </>
    )
}

export default Cards;