import React from 'react'
import "./Checkout.css";
import Subtotal from "./Subtotal";

function Checkout() {
    return (
        <div className='checkout'>
            <div className="checkout__left">
                {/*<img className="checkout__ad" src='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg'/>*/}
            </div>

            <div>
                <h2 className="checkout__title">Your shopping basket</h2>
                {/*Basket items */}
            </div>

            <div className="checkout__right">
                <h2>Subtotal component</h2>
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
