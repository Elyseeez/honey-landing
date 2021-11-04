import React from 'react';
import first from '../../assets/honeyone.png';
import second from '../../assets/honeytwo.png';

function Promo () { 
    return (
        <div className="promo">
            <div className="promo__wrapper">
                <div className="promo__first-item">
            <div className="promo__image"> <img src={first} alt="honey" /></div>
                    <div className="promo__inner">
                    <h2 className="promo__title">Honey created in the <br/> laps of nature.</h2>
                    <p className="promo__subtitle">Honey is one of the prime ingredients in your <br/> everyday food schedule. As a brand, you need <br/> a marketing strategy that will help...</p>
                    <button className="promo__btn">Learn More</button>
                    </div>
            </div>
            <div className="promo__second-item">
            
                    <div className="promo__inner">
                    <h2 className="promo__title">Does your honey taste  <br/> bad? Try us!</h2>
                    <p className="promo__subtitle">Honey is one of the prime ingredients in your <br/> everyday food schedule. As a brand, you need <br/> a marketing strategy that will help...</p>
                    <button className="promo__btn">Learn More</button>
                    </div>
                    <div className="promo__image"> <img src={second} alt="honey" /></div>
            </div>

        </div>
        </div>
    )
}


export default Promo;