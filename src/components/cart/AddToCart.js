import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addItem } from '../../store/actions/cartActions';
import { Redirect } from 'react-router-dom';

class AddToCart extends Component {
  state = {
    name:'',
    price:'',
    id: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
      id: this.props.match.params.id
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addItem(this.state)
    console.log(this.props.history)
    this.props.history.push('/cart/'+this.state.id);
  }

  render() {
    const { auth } = this.props;
    if(!auth.uid) return <Redirect to='/signin' />
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Add To Cart</h5>
          <div className="input-field">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="price">Price</label>
            <input type="text" id="price" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Add To Cart</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addItem: (item) => dispatch(addItem(item))
  }
}

//Connect is used to establish a connection between react component and the redux store
export default connect(mapStateToProps, mapDispatchToProps)(AddToCart);
