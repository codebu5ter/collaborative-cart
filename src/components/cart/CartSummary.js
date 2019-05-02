import React from 'react';
import moment from 'moment';

const CartSummary = ({item}) => {
    return (
        <div className="card z-depth-0 cart-summary">
            <div className="card-content grey-texttext-darken-3">
                <span className="card-title">{item.name}</span>
                <span className="card-title">{item.price}</span>
                <p>Added by {item.authorFirstName} {item.authorLastName}</p>
                <p className="grey-text">{moment(item.createdAt.toDate()).calendar()}</p>
             </div>
        </div>
    )
}

export default CartSummary;