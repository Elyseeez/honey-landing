import React from 'react'; 
import lux from '../../assets/lux.png'
import miu from '../../assets/miu.png'
import dunkin from '../../assets/dunkin.png'
import bur from '../../assets/bur.png'

function Shops () {
    return(
        <div className="shops">
            <div className="shops__wrapper">
                <div className="shops__text">
                    <h1 className="shops__title">Our Trusted Shops</h1>
                </div>
                <div className="shops__partners">
                    <ul>
                        <li> <img src={lux} alt="lux" /> </li>
                        <li><img src={miu} alt="miu" /></li>
                        <li><img src={dunkin} alt="dunkin" /></li>
                        <li><img src={bur} alt="bur" /></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}


export default Shops;