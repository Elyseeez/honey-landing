import React from 'react';
import footer from '../assets/icons/footer.png';
import facebook from '../assets/icons/facebook.png';
import twitter from '../assets/icons/twitter.png';
import gplus from '../assets/icons/gplus.png';
import pinteresta from '../assets/icons/pinteresta.png';
import gplay from '../assets/icons/gplay.png';
import appstore from '../assets/icons/appstore.png';

function Footer () { 
    return (
        <div className="footer">
            <div className="footer__wrapper">
                <img src={footer} alt="honey" />
                <p className="footer__subtitle">Honey is one of the prime ingredients <br/> in your everyday food schedule. </p>
                 <div>
                     <ul>
                    <li> <img src={facebook} alt="facebook" /> </li>
                    <li> <img src={twitter} alt="twitter" /> </li>
                    <li> <img src={gplus} alt="gplus" /> </li>
                    <li> <img src={pinteresta} alt="pinteresta" /> </li>
                    </ul>
                 </div>
                 <div>
                     <div className="footer__atstore">
                         <img src={gplay} alt="gplay" />
                         <img src={appstore} alt="appstore" />
                     </div>
                 </div>
            </div>
        </div>
    )
}


export default Footer;