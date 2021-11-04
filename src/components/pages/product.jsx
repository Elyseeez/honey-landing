import React from 'react';
import forets from '../../assets/forets.png';
import basswood from '../../assets/basswood.png';

function Product () { 
    return (
        <div className="product">
            <div className="product__wrapper"> 
            <div className="product__text">
                <h1 className="product__title">Our Product</h1>
            </div>
            <div className="product__items">
            <div className="product__first-item">
            
                    <div className="product__inner">
                    <h2 className="product__item-title">Eucalyptus Honey	</h2>
                    <p className="product__item-subtitle">It has the scent of lavender, medium sweetness lavender scented, and has a medium amber color.</p>
                    <button className="product__btn">Buy Now</button>
                    </div>
                    <div className="product__image"> <img src={forets} alt="honey" /></div>
            </div>
            <div className="product__second-item">
                <div className="product__inner">
                    <h2 className="product__item-title">Basswood Honey</h2>
                    <p className="product__item-subtitle">Basswood is a tree native and abundant in Wisconsin, which is also known as the Linden tree.</p>
                    <button className="product__btn">Buy Now</button>
                    </div>
                    <div className="product__image"> <img src={basswood} alt="honey" /></div>
                </div>
            </div>
            </div>
        </div>
    )
}


export default Product;