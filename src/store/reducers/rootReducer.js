import authReducer from './authReducer';
import cartReducer from './cartReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
  auth: authReducer,
  cart: cartReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
})

export default rootReducer;