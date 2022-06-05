import './styles.css'
import { useState } from 'react';
import Weekday from '../weekday'

function Week (weeklyWeather, timezone){

    const [forecastResponse, setForecast] = useState(false);
    const OPENWEATHER_KEY = `${process.env.REACT_APP_OPENWEATHER_KEY}`;
    console.log(process.env.REACT_APP_OPENWEATHER_KEY);

    const location = [43.0468746,-2.2771408];

    /* no funciona todavía

    async function getForecast() {
        //https://api.openweathermap.org/data/2.5
        await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=43.0468746&lon=-2.2771408&appid=${OPENWEATHER_KEY}`)
            .then(res => res.json())
            .then((data => {
                //setForecast(data['data']['list'].slice(1,7));
                //let testforecast = data['data']['list'].slice(1,7);
                console.log(data);
                return testforecast;
            }))
       
    }

    getForecast().then((testforecast) => {
        console.log('test: ',testforecast);
        Object.values(testforecast).map((k,v) => console.log(k.main.temp));
    });

    */

    // Uso objeto falso de momento hasta que funcione el fetch
    const forecastobject = [
        {main:"sunny"},{main:"cloudy"},{main:"rainy"},{main:"partly cloudy"},{main:"thunderstorm"},{main:"sunny"}
    ]

    return(
        <>
        <div className='weekContainer'>
            <div className='weeklytitle'>
                <h3>PRÓXIMOS DÍAS</h3>
            </div>
            <div className='weekly'>
                {Object.values(forecastobject).map((v,k) => (
                    <Weekday key={k} indice={k} desc_tiempo={v}></Weekday>
                ))};
            </div>
        </div>
        </>
    )
}

export default Week;