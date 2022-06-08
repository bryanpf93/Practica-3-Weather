import './styles.css'
import sunrise from "../../assets/Icon_amanecer.svg"
import sunset from "../../assets/Icon_atardecer.svg"
import humidity from "../../assets/Icon_humidity.svg"
import uptide from "../../assets/Icon_marea_alta.svg"
import bottide from "../../assets/Icon_marea_baja.svg"
import wind from "../../assets/Icon_viento.svg"
import energy from "../../assets/Icon_wave_energy.svg"
import period from "../../assets/Icon_wave_period.svg"
import direction from "../../assets/Icon_wave_direction.svg"
import height from "../../assets/Icon_wave_height.svg"
import windDir from "../../assets/Icon_wind_direction.svg"
import rain from "../../assets/Icon_lluvia.svg"
import { useEffect , useState, useMemo } from 'react'

const tides = [
    {
        "altura_ola": "0.3",
        "direccion_ola": "NW",
        "energia_ola": "15",
        "periodo": "10",
        "hora_marea_alta": "19:12",
        "marea_alta": "3.35",
        "hora_marea_baja": "1:29",
        "marea_baja": "0.66"

    },
    {
        "altura_ola": "0.1",
        "direccion_ola": "NE",
        "energia_ola": "2",
        "periodo": "8",
        "hora_marea_alta": "8:15",
        "marea_alta": "2.80",
        "hora_marea_baja": "14:17",
        "marea_baja": "0.93"
    },
    {
        "altura_ola": "0.6",
        "direccion_ola": "NNW",
        "energia_ola": "23",
        "periodo": "6",
        "hora_marea_alta": "9:52",
        "marea_alta": "2.70",
        "hora_marea_baja": "15:54",
        "marea_baja": "1.16"
    },
    {
        "altura_ola": "0.5",
        "direccion_ola": "WNW",
        "energia_ola": "66",
        "periodo": "11",
        "hora_marea_alta": "10:52",
        "marea_alta": "2.89",
        "hora_marea_baja": "16:55",
        "marea_baja": "1.21"
    },
    {
        "altura_ola": "1",
        "direccion_ola": "S",
        "energia_ola": "102",
        "periodo": "7",
        "hora_marea_alta": "9:35",
        "marea_alta": "1.45",
        "hora_marea_baja": "15:35",
        "marea_baja": "0.66"
    },
    {
        "altura_ola": "1.4",
        "direccion_ola": "W",
        "energia_ola": "384",
        "periodo": "10",
        "hora_marea_alta": "17:52",
        "marea_alta": "1.85",
        "hora_marea_baja": "12:09",
        "marea_baja": "0.36"
    },
    {
        "altura_ola": "0.7",
        "direccion_ola": "WNW",
        "energia_ola": "142",
        "periodo": "12",
        "hora_marea_alta": "9:57",
        "marea_alta": "1.62",
        "hora_marea_baja": "4:29",
        "marea_baja": "0.57"
    },
    {
        "altura_ola": "0.5",
        "direccion_ola": "NW",
        "energia_ola": "18",
        "periodo": "6",
        "hora_marea_alta": "9:44",
        "marea_alta": "2.90",
        "hora_marea_baja": "15:43",
        "marea_baja": "1.43"
    },
    {
        "altura_ola": "0.7",
        "direccion_ola": "SW",
        "energia_ola": "123",
        "periodo": "11",
        "hora_marea_alta": "10:46",
        "marea_alta": "2.86",
        "hora_marea_baja": "16:47",
        "marea_baja": "1.47"
    },
    {
        "altura_ola": "0.3",
        "direccion_ola": "SE",
        "energia_ola": "6",
        "periodo": "6",
        "hora_marea_alta": "8:13",
        "marea_alta": "2.84",
        "hora_marea_baja": "14:15",
        "marea_baja": "0.90"
    },
    {
        "altura_ola": "0.8",
        "direccion_ola": "WNW",
        "energia_ola": "174",
        "periodo": "12",
        "hora_marea_alta": "10:50",
        "marea_alta": "2.57",
        "hora_marea_baja": "14:52",
        "marea_baja": "1.17"
    },
    {
        "altura_ola": "0.9",
        "direccion_ola": "NW",
        "energia_ola": "60",
        "periodo": "6",
        "hora_marea_alta": "8:26",
        "marea_alta": "1.95",
        "hora_marea_baja": "14:26",
        "marea_baja": "0.88"
    }
]

// return random object of tides
let  getTides = () => {
    console.log('random');
    const random = Math.floor(Math.random() * tides.length);
    return tides[random];
}

const randomEnergy = Math.floor(Math.random() * (100 - 1) + 1);


function Forecast({ cities, geoCode }) {
    const tideSearch = useMemo(() => getTides(), []);

    function padTo2Digits(num) {
        return num.toString().padStart(2, '0');
    }

    // función convertir grados a puntos cardinales
    function degreesToCoordinates(degrees) {
        // Define array of directions
        const directions = ['Norte', 'Nordeste', 'Este', 'Sureste', 'Sur', 'Sudoeste', 'Oeste', 'Noroeste'];
        // Split into the 8 directions
        degrees = degrees * 8 / 360;
        // round to nearest integer.
        degrees = Math.round(degrees, 0);
        // Ensure it's within 0-7
        degrees = (degrees + 8) % 8

        return directions[degrees];
    }

    // console.log('Dirección: ', degreesToCoordinates(303.66));

    const sunRise = cities?.current?.sunrise;
    const date = new Date(sunRise * 1000);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const time = `${padTo2Digits(hours)}:${padTo2Digits(minutes)}`;

    const sunSet = cities?.current?.sunset;
    const dateTwo = new Date(sunSet * 1000);
    const hoursTwo = dateTwo.getHours();
    const minutesTwo = dateTwo.getMinutes();
    const timeTwo = `${padTo2Digits(hoursTwo)}:${padTo2Digits(minutesTwo)}`;
    

    const today = new Date();
    // fecha unix porque la pide la api de stormglass
    const unixstart = parseInt((today.getTime() / 1000).toFixed(0));
    // params a pasar a la api (cosas que usaremos)
    const params = 'waveHeight,waveDirection,windSpeed,windDirection,humidity,wavePeriod';
    const STORMGLASS_KEY = `${process.env.REACT_APP_STORMGLASS_KEY}`;
    // state para los resulados (params devueltos)
    const [sgResponse, setSGResponse] = useState('');

    // const location = [43.0468746,-2.2771408];
    // const locatMadrid = [14.7110139,-17.5358652];

    
    useEffect(() => {

        // todo esto deberá ir en a-main junto con el fetch principal
        // el mismo callback de cambio (text)

        if (geoCode && geoCode.length >= 2) {

            fetch(`https://api.stormglass.io/v2/weather/point?lat=${geoCode[0]}&lng=${geoCode[1]}&start=${unixstart}&params=${params}`, {
                headers: {
                'Authorization': STORMGLASS_KEY
                }
            }).then((response) => response.json()).then((jsonData) => {
                // solo la primera hora (actual)
                setSGResponse(jsonData.hours[0]);
            });
        }

    },[geoCode])
    


    return (
        
        <div className='main'>
            <div className='container_single'>
                <p>ALTURA OLA</p>
                <img src={height} alt="" />
                <p style={{ fontSize: 70 }}> {tideSearch.altura_ola}</p>
            </div>
            <div className='container_single'>
                <p>DIRECCIÓN OLA</p>
                <img src={direction} alt="" />
                <p style={{ fontSize: 50 }}>{tideSearch.direccion_ola}</p>
            </div>
            <div className='container_single'>
                <p>VIENTO</p>
                <img src={wind} alt="" />
                <p style={{ fontSize: 60 }}>{cities?.current?.wind_speed}</p>
            </div>
            <div className='container_single'>
                <p>DIRECCION</p>
                <img src={windDir} alt="" />
                <p style={{ fontSize: 50 }}>{tideSearch.direccion_ola}</p>
            </div>
            <div className='container_single'>
                <p>PROBABILIDAD</p>
                <img src={rain} alt="" />
                <div className='container-prob'>
                    <p style={{ fontSize: 80, display: 'flex', alignItems: 'flex-end' }}>{randomEnergy}</p>
                    <p style={{ fontSize: 40, marginBottom: 30 }}>%</p>
                </div>
            </div>
            <div className='container_double'>
                <div className='sub-container' >
                    <img src={bottide} alt="" />
                    <div className='text'>
                        <p style={{ margin: 0 }}>MAREA</p>
                        <p>BAJA</p>
                    </div>
                    <div>
                        <p style={{ fontSize: 40, margin: 0 }}>{tideSearch.hora_marea_baja}</p>
                        <p style={{ fontSize: 24 }}>{tideSearch.marea_baja}</p>
                    </div>
                </div>
                <div className='sub-container'>
                    <img src={uptide} alt="" />
                    <div className='text'>
                        <p style={{ margin: 0 }}>MAREA</p>
                        <p>ALTA</p>
                    </div>
                    <div>
                        <p style={{ fontSize: 40, margin: 0 }}>{tideSearch.hora_marea_alta}</p>
                        <p style={{ fontSize: 24 }}>{tideSearch.marea_alta}</p>
                    </div>
                </div>
            </div>
            <div className='container_single'>
                <p>ENERGÍA OLA</p>
                <img src={energy} alt="" />
                <div className='container-prob'>
                    <p style={{ fontSize: 80, display: 'flex', alignItems: 'flex-end' }}>{randomEnergy}</p>
                    <p style={{ fontSize: 40, marginBottom: 30 }}>kJ</p>
                </div>
            </div>
            <div className='container_single'>
                <p>HUMEDAD</p>
                <img src={humidity} alt="" />
                <div className='container-prob'>
                    <p style={{ fontSize: 80, display: 'flex', alignItems: 'flex-end' }}>{cities?.current?.humidity}</p>
                    <p style={{ fontSize: 40, marginBottom: 30 }}>%</p>
                </div>    
            </div>
            <div className='container_double'>
                <div className='sub-container'>
                    <p>AMANECER</p>
                    <img src={sunrise} alt="" />
                    { cities ? <p style={{ fontSize: 80 }}>{time}</p> : "00:00"}
                </div>
                <div className='sub-container'>
                    <p>ATARDECER</p>
                    <img src={sunset} alt="" />
                    { cities ? <p style={{ fontSize: 80 }}>{timeTwo}</p>: "00:00"}
                </div>
            </div>
            <div className='container_single'>
                <p>PERIODO OLA</p>
                <img src={period} alt="" />
                <div className='container-prob'>
                    <p style={{ fontSize: 80, display: 'flex', alignItems: 'flex-end' }}>{tideSearch.periodo}</p>
                    <p style={{ fontSize: 40, marginBottom: 30 }}>seg</p>
                </div>    
            </div>
        </div>
    )
}

export default Forecast;