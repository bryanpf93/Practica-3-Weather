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


function Forecast() {
    return (

        <div className='main'>
            <div className='container_single'>
                <p>ALTURA OLA</p>
                <img src={height} alt="" />
                <p style={{ fontSize: 80 }}>0.8</p>
            </div>
            <div className='container_single'>
                <p>DIRECCIÓN OLA</p>
                <img src={direction} alt="" />
                <p style={{ fontSize: 80 }}>WN</p>
            </div>
            <div className='container_single'>
                <p>VIENTO</p>
                <img src={wind} alt="" />
                <p style={{ fontSize: 80 }}>8.75</p>
            </div>
            <div className='container_single'>
                <p>DIRECCION</p>
                <img src={windDir} alt="" />
                <p style={{ fontSize: 80 }}>WSW</p>
            </div>
            <div className='container_single'>
                <p>PROBABILIDAD</p>
                <img src={rain} alt="" />
                <div className='container-prob'>
                    <p style={{ fontSize: 80, display: 'flex', alignItems: 'flex-end' }}>0</p>
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
                        <p style={{ fontSize: 40, margin: 0 }}>08:00H</p>
                        <p style={{ fontSize: 24 }}>0.92m</p>
                    </div>
                </div>
                <div className='sub-container'>
                    <img src={uptide} alt="" />
                    <div className='text'>
                        <p style={{ margin: 0 }}>MAREA</p>
                        <p>ALTA</p>
                    </div>
                    <div>
                        <p style={{ fontSize: 40, margin: 0 }}>18:52H</p>
                        <p style={{ fontSize: 24 }}>1.90m</p>
                    </div>
                </div>
            </div>
            <div className='container_single'>
                <p>ENERGÍA OLA</p>
                <img src={energy} alt="" />
                <div className='container-prob'>
                    <p style={{ fontSize: 80, display: 'flex', alignItems: 'flex-end' }}>86.1</p>
                    <p style={{ fontSize: 40, marginBottom: 30 }}>kJ</p>
                </div>
            </div>
            <div className='container_single'>
                <p>HUMEDAD</p>
                <img src={humidity} alt="" />
                <div className='container-prob'>
                    <p style={{ fontSize: 80, display: 'flex', alignItems: 'flex-end' }}>15</p>
                    <p style={{ fontSize: 40, marginBottom: 30 }}>%</p>
                </div>
            </div>
            <div className='container_double'>
                <div className='sub-container'>
                    <p>AMANECER</p>
                    <img src={sunrise} alt="" />
                    <p style={{ fontSize:80}}>06:35</p>
                </div>
                <div className='sub-container'>
                    <p>ATARDECER</p>
                    <img src={sunset} alt="" />
                    <p style={{ fontSize:80}}>21:35</p>
                </div>
            </div>
            <div className='container_single'>
                <p>PERIODO OLA</p>
                <img src={period} alt="" />
                <div className='container-prob'>
                    <p style={{ fontSize: 80, display: 'flex', alignItems: 'flex-end' }}>8</p>
                    <p style={{ fontSize: 40, marginBottom: 30 }}>seg</p>
                </div>
            </div>
        </div>
    )
}

export default Forecast;