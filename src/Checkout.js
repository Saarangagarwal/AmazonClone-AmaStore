import React from 'react'
import "./Checkout.css";
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import Subtotal from "./Subtotal";

function Checkout() {
    const [{ basket, user }, dispatch] = useStateValue();

    return (
        <div className='checkout'>
            <div className="checkout__left">
                {/*<img className="checkout__ad" src='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg'/>*/}
            </div>

            <div>
                <h3>Hello, {user?.email}</h3>
                <h2 className="checkout__title">Your shopping basket</h2>

                {basket.map(item => (
                    <CheckoutProduct
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                    />
                ))}
                {/* CheckoutProduct */}
            </div>

            <div className="checkout__right">
                <h2>Subtotal component</h2>
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
