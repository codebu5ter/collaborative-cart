import {LOGIN_ERROR, LOGIN_SUCCESS,
   SIGNOUT_SUCCESS, LOCATED,
    SIGNUP_SUCCESS, SIGNUP_ERROR} from '../constants'

const initState = {
  authError: null,
  id: ''
}

const authReducer = (state = initState, action) => {
  switch(action.type){
    case LOGIN_ERROR :
      console.log('login error');
      return {
        ...state,
        authError: 'Login failed'
      }

    case LOGIN_SUCCESS :
      console.log('login success');
      return {
        ...state,
        authError: null
      }

    case SIGNOUT_SUCCESS :
      console.log('signout success');
      return state;

    case LOCATED :
      console.log('location found');
      return {
        ...state,
        id: action.item.id
      }

    case SIGNUP_SUCCESS :
      console.log('signup success')
      return {
        ...state,
        authError: null
      }

    case SIGNUP_ERROR :
      console.log('signup error')
      return {
        ...state,
        authError: action.err.message
      }

    default:
      return state
  }
};

export default authReducer;
