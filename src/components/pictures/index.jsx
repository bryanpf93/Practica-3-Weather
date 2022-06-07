import './styles.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import playa1 from "../../assets/playas/playa1.png";
import playa2 from "../../assets/playas/playa2.png";
import playa3 from "../../assets/playas/playa3.png";
import playa4 from "../../assets/playas/playa4.png";
import playa5 from "../../assets/playas/playa5.png";
import playa6 from "../../assets/playas/playa6.png";
import playa7 from "../../assets/playas/playa7.png";


function Pictures() {
    const responsive = {
    desktop: {
        breakpoint: { max: 4000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }}

    return (
        <>
            <Carousel responsive={responsive}>
                <div><img src={playa1} alt=""></img></div>
                <div><img src={playa2} alt=""></img></div>
                <div><img src={playa3} alt=""></img></div>
                <div><img src={playa4} alt=""></img></div>
                <div><img src={playa5} alt=""></img></div>
                <div><img src={playa6} alt=""></img></div>
                <div><img src={playa7} alt=""></img></div>
            </Carousel>
        </>
    )
}

export default Pictures;