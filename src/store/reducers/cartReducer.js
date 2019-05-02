const initState = {
  id: ''
}

const cartReducer = (state = initState, action) => {
  switch(action.type){
    case 'ADD_ITEM':
    return {
      ...state,
      id: action.item.id
    }

    case 'ADD_ITEM_ERROR':
      console.log(action.err);
      return state;

    default:
      return state;
  }
}

export default cartReducer;