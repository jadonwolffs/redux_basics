import * as actions from '../actions/actions';
import {updateObject} from '../utility';
const initialState = {
  counter: 0
};

const reducer = (state = initialState, action) => {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case actions.INC:
      newState.counter = state.counter + 1;
      return newState;
    case actions.DEC:
      return updateObject(state, {counter:state.counter - 1});
    case actions.ADD:
      return updateObject(state, {counter:state.counter + action.value});
    case actions.SUB:
      return updateObject(state, {counter:state.counter - action.value});
      // return {
      //   ...state,
      //   counter: state.counter - action.value
      // };
    default:
      return state;
  }
};
export default reducer;