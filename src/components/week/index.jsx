import './styles.css'
import { useState, useEffect } from 'react';
import Weekday from '../weekday'

function Week (coords){

    // const [forecastResponse, setForecast] = useState(false);
    // const OPENWEATHER_KEY = `${process.env.REACT_APP_API_KEY}`;
    // console.log(process.env.REACT_APP_OPENWEATHER_KEY);

    const location = [43.0468746,-2.2771408];

    //no funciona todavía (ya funciona jeje)
    
    // useEffect(() => {
        
    //     fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${location[0]}&lon=${location[1]}&appid=${OPENWEATHER_KEY}`)
    //         .then(res => res.json())
    //         .then((data => {
    //             //setForecast(data.list.slice(1,7));
    //             let sixdayforecast = data?.list?.slice(1,7);
    //             sixdayforecast.map(d => {
    //                 // setForecast(...forecastResponse, d.weather.main)
    //             })
    //             //console.log(forecastResponse);
    //             //return testforecast;
    //     }))
        

    // }, [])
    
    /*
    getForecast().then((testforecast) => {
        console.log('test: ',testforecast);
        Object.values(testforecast).map((k,v) => console.log(k.main.temp));
    });
    /*/

    // Uso objeto falso de momento hasta que me desbaneen la api de openweather
    const forecastobject = [
        {main:"Clear"},{main:"Thunderstorm"},{main:"Rain"},{main:"Atmosphere"},{main:"Snow"},{main:"Clouds"}
    ]

    return(
        <>
        <div className='weeklytitle'>
            <h3>PRÓXIMOS DÍAS</h3>
        </div>
        <div className='weekContainer'>
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