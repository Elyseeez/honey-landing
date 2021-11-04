import React from 'react';

import icon  from '../assets/icons/main.png';

function Header () { 
    return (
        <div className="header">
            <div className="header__wrapper">
             <div className="header__icon"> <img src={icon} alt="Clersky" /></div>

             <div className="header__menu">
                 <ul>
                     <li><a href="#" className="header__links">Home</a></li>
                     <li><a href="#" className="header__links">About</a></li>
                     <li><a href="#" className="header__links">Our Product</a></li>
                     <li><a href="#" className="header__links">Contact</a></li>
                     
                 </ul>
             </div>
             </div>
        </div>
    )
}


export default Header;