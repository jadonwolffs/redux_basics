import * as actions from '../actions';
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
      return {
        ...state,
        counter: state.counter - 1
      };
    case actions.ADD:
      return {
        ...state,
        counter: state.counter + action.value
      };
    case actions.SUB:
      return {
        ...state,
        counter: state.counter - action.value
      };
    default:
      return state;
  }
};
export default reducer;