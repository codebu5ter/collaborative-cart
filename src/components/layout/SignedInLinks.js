import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';

const SignedInLinks = (props) => {
    console.log(props.id);
    return (
        <ul className="right">
            <li><NavLink to={props.id+'/addtocart/'}>Add To Cart</NavLink></li>
            <li><a onClick={props.signOut}>Log Out</a></li>
            <li><NavLink to='/' className="btn  btn-floating pink lighten-1">{props.profile.initials}</NavLink></li>
        </ul>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}
//Connect is used to establish a connection between react component and the redux store
export default connect(null, mapDispatchToProps)(SignedInLinks);
