import './styles.css'

function Weekday (props){

    const sol = ['sunny','sartially sunny','muchisimo calor'];
    const nube = ['cloudy','incredinly cloudy'];
    const part_nube = ['partly cloudy','partly sunny'];
    const lluvia = ['rainy','very rainy'];
    const tormenta = ['thunderstorm','tornado'];

    let desc_tiempo = '';
    desc_tiempo = sol.includes(props.desc_tiempo.main) ? 'soleado' : '';
    desc_tiempo = nube.includes(props.desc_tiempo.main) ? 'nublado' : desc_tiempo;
    desc_tiempo = part_nube.includes(props.desc_tiempo.main) ? 'part_nublado' : desc_tiempo;
    desc_tiempo = lluvia.includes(props.desc_tiempo.main) ? 'lluvia' : desc_tiempo;
    desc_tiempo = tormenta.includes(props.desc_tiempo.main) ? 'doblenube' : desc_tiempo;
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
