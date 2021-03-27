import React, { useState } from 'react'
import './Orders.css'
import { useStateValue } from './StateProvider';

function Orders() {
    const [{ basket, user }, dispatch] = useStateValue();
    const [orders, setOrders] = useState([]);
    return (
        <div className="orders">
             <h1>Your Orders</h1>
        </div>
    )
}

export default Orders
