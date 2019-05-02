export const addItem = (item) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    firestore.collection('carts').doc(item.id).collection('items').add({
      ...item,
      authorFirstName: profile.firstName,
      authorLastName: profile.lastName,
      authorId: authorId,
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: 'ADD_ITEM', item });
    }).catch((err) => {
      dispatch({ type: 'ADD_ITEM_ERROR', err})
    })
  }
};

export const createItem = (item) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    firestore.collection('carts').doc(profile.authorId).collection('items').add({
      ...item,
      authorFirstName: profile.firstName,
      authorLastName: profile.lastName,
      authorId: authorId,
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: 'ADD_ITEM', item });
    }).catch((err) => {
      dispatch({ type: 'ADD_ITEM_ERROR', err})
    })
  }
};