import React, { Component } from 'react';
import Notifications from './Notifications';
import CartList from '../cart/CartList';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';

class Menu extends Component {
    render(){
        const { items, auth, notifications } = this.props;
        if(!auth.uid) return <Redirect to='/signin' />
        
        return (
            <div className="menu contaner">
                <div className="row">
                    <div className="col s12 m6">
                        <CartList items={items} />
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <Notifications notifications={notifications} />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        items: state.firestore.ordered.carts,
        auth: state.firebase.auth,
        notifications: state.firestore.ordered.notifications
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'carts', orderBy: ['createdAt', 'desc'] },
        { collection: 'notifications', limit:3, orderBy: ['time', 'desc'] }
    ])
)(Menu);