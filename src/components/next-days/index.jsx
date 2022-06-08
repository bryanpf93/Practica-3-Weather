import { useEffect, useState } from 'react';
import Days from '../days';
import './styles.css'
import sun from '../../assets/images/icon_sol.svg'
import oneCloud from '../../assets/images/icon_nube.svg'
import twoCloud from '../../assets/images/icon_partnube.svg'






function NextDays({ cities }) {

    const Images = [
        {
            "name": "sun",
            "image": sun
        },
        {
            "name": "sunCloud",
            "image": oneCloud
        },
        {
            "name": "oneCloud",
            "image": oneCloud
        },
        {
            "name": "sunCloud",
            "image": sun
        },
        {
            "name": "sun",
            "image": sun
        },
        {
            "name": "oneCloud",
            "image": oneCloud
        },
        {
            "name": "sun",
            "image": sun
        },

    ]

    // return random Object.image from Images
    let getImage = () => {
        const random = Math.floor(Math.random() * Images.length);
        return Images[random];;
    }




    return (
        <>  
            <div className="days-container">
                <div className='days'>
                    <p>JUEVES </p>
                    <img className='image-days' src={getImage().image} alt="" />
                </div>
                <div className='days'>
                <p>VIERNES </p>
                    <img className='image-days' src={getImage().image} alt="" />
                </div>
                <div className='days'>
                <p>SABADO </p>
                    <img className='image-days' src={getImage().image} alt="" />
                </div>
                <div className='days'>
                <p>DOMINGO </p>
                    <img className='image-days' src={getImage().image} alt="" />
                </div>
                <div className='days'>
                <p>LUNES </p>
                    <img className='image-days' src={getImage().image} alt="" />
                </div>
                <div className='days'>
                <p>MARTES </p>
                    <img className='image-days' src={getImage().image} alt="" />
                </div>
            </div>




        </>
    )





}

export default NextDays;