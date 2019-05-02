import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { connect } from 'react-redux';

const Navbar = (props) => {
    const { auth, profile, id } = props;
    console.log(auth);
    const links = auth.uid ? <SignedInLinks id={id} profile={profile} /> : <SignedOutLinks />;
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to='/' className="brand-logo">Zomato</Link>
                { links }
            </div>
        </nav>
    )
}

const mapStateToProps = (state) => {
    return{
      auth: state.firebase.auth,
      profile: state.firebase.profile,
      id: state.cart.id
    }
  }

export default connect(mapStateToProps)(Navbar);