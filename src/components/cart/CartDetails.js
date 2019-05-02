import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
import CartSummary from './CartSummary';

const CartDetails = (props) => {
  const { id, items, auth } = props;
  if(!auth.uid) return <Redirect to='/signin' />
  // if(items) {
  //   let tab;
  //   for(tab in items){
  //     console.log(tab);
  //     var iter = items[tab];
  //     console.log(iter);
  //     return (
  //       <div className="cart-list section">
  //           <CartSummary item={iter} key={iter.id} />
  //       </div>
  //     )
  //   }
  // }

  if (items) {
    return Object.keys(items).map((item) => (<div className="cart-list section">
      <CartSummary item={items[item]} key={items[item].id} />
    </div>))
  }
  
    // const adb = Object.keys(items).
  return(<p>Loading...</p>)
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const carts = state.firestore.data.carts;
  const cart = carts ? carts[id] : null;
  const items = cart ? cart.items : null;
  const cid = state.cart.id;
  return {
    cid: cid,
    id: id,
    items: items,
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect((props) => [
    { collection: 'carts',
      doc: props.id,
      subcollections: [
        { collection: 'items'}
      ]
    }
  ])
)(CartDetails)
