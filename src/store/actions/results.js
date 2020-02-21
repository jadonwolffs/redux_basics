import * as actions from './actions';
export const syncStore = result => {
    return {
      type: actions.STO,
      result: result
    };
  };
  
  export const store = result => {
    return (dispatch,getState) => {
      setTimeout(() => {
        const oldCounter = getState().ctr.counter;
        console.log(oldCounter);
        
        dispatch(syncStore(result));
      },2000);
    };
  };
  export const del = id => {
    return {
      type: actions.DEL,
      id: id
    };
  };
  