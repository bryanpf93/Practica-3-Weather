import { useEffect, useState } from 'react';
import './styles.css'
import logo from "../../assets/olassi.svg"
import Forecast from '../forecast';
import Week from '../week';
import sun from '../../assets/tiempo/sol.svg'
import rain from '../../assets/tiempo/lluvia.svg'
import mist from '../../assets/tiempo/niebla.svg'
import snow from '../../assets/tiempo/nieve.svg'
import oneCloud from '../../assets/tiempo/nube.svg'
import twoCloud from '../../assets/tiempo/dosnubes.svg'
import storm from '../../assets/tiempo/tormenta.svg'
import sunCloud from '../../assets/tiempo/nubesol.svg'


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
    // console.log(iconWeather);
    
    // switch (iconWeather) {
    //     case "01d":  
    //     return <img src={sun} alt=""></img>
    //     case "01n":
    //     return <img src={sun} alt=""></img>
    //     case "02d":
    //     return <img src={sunCloud} alt=""></img>
    //     case "02n":
    //     return <img src={sunCloud} alt=""></img>
    //     case "03d":
    //     return <img src={oneCloud} alt=""></img>
    //     case "03n":
    //     return <img src={oneCloud} alt=""></img>
    //     case "04d":
    //     return <img src={twoCloud} alt=""></img>
    //     case "04n":
    //     return <img src={twoCloud} alt=""></img>
    //     case "09d":
    //     return <img src={rain} alt=""></img>
    //     case "09n": 
    //     return <img src={rain} alt=""></img>
    //     case "10d":
    //     return <img src={rain} alt=""></img>
    //     case "10n":
    //     return <img src={rain} alt=""></img>
    //     case "11d":
    //     return <img src={storm} alt=""></img>
    //     case "11n":
    //     return <img src={storm} alt=""></img>
    //     case "13d":
    //     return <img src={snow} alt=""></img>
    //     case "13n":
    //     return <img src={snow} alt=""></img>
    //     case "50d":
    //     return <img src={mist} alt=""></img>    
    //     case "50n":
    //     return <img src={mist} alt=""></img>
            
    //     default:
    //         <img src={sun} alt=""></img>
       
    // }

    return (

        <>

            <div className='containers-cities'>
                <div style={{ width: 558, height: 500 }}>
                    <p className='title'>{geoCode[0]?.name}</p>
                    <p className='today'>{today}</p>
                    <div className='weather-temperature'>
                        {/* <img style={{ width: 400 }} src={iconWeather} alt="" /> */}
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
                <Forecast cities={cities} geoCode={geoCode}></Forecast>
                <Week cities={cities}></Week>
            </div>
        </>
    )
}

export default Cards;