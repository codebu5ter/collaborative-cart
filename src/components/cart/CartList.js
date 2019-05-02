 import React from 'react';
 import CartSummary from './CartSummary';
 import { Link } from 'react-router-dom';

 const CartList = ({items}) => {
     console.log(items);
     return (
        <div className="cart-list section">
            {items && items.map(item => {
                console.log(item)
                return (
                    <Link to={'/cart/'+item.id}>
                        <CartSummary item={item} key={item.id} />
                    </Link>
                )
            })}
        </div>
     )
 }

 export default CartList;