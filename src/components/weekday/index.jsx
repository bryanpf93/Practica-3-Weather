import './styles.css'

function Weekday (props){

    let desc_tiempo = '';
    desc_tiempo = props.desc_tiempo.main === 'Clear' ? 'soleado' : '';
    desc_tiempo = props.desc_tiempo.main === 'Clouds' ? 'nublado' : desc_tiempo;
    desc_tiempo = props.desc_tiempo.main=== 'Thunderstorm' ? 'tormenta' : desc_tiempo;
    desc_tiempo = ['Drizzle','Rain'].includes(props.desc_tiempo.main) ? 'lluvia' : desc_tiempo;
    desc_tiempo = props.desc_tiempo.main === 'Snow' ? 'nieve' : desc_tiempo;
    desc_tiempo = props.desc_tiempo.main === 'Atmosphere' ? 'niebla' : desc_tiempo;
    // console.log(desc_tiempo);

    var indice = props.indice+1;
    //var desc_tiempo = `${props.desc_tiempo.main}`;
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + indice);
    const options = { weekday: 'long'};
    const dia = tomorrow.toLocaleDateString('es-ES', options);
    //console.log(dia);


    return(
        <>
  
            <div className='weekday'>
                <span className='day'>{dia}</span>
                <span className={desc_tiempo}></span>
            </div>

        </>
    )
}

export default Weekday;
