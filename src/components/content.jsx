import React from 'react';
import {Main, Shops, Promo, Product} from './pages';

function Content () { 
    return (
        <div className="content">
            <Main/>
            <Shops/>
            <Promo/>
            <Product/>
        </div>
    )
}


export default Content;