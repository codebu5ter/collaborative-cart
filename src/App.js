import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Menu from './components/menu/Menu';
import CartDetails from './components/cart/CartDetails';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import AddToCart from './components/cart/AddToCart';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' component={Menu} />
          <Route exact path='/cart/:id' component={CartDetails} />
          <Route path='/signin' component={SignIn} />
          <Route path='/signup' component={SignUp} />
          <Route path='/cart/:id/addtocart' component={AddToCart} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
