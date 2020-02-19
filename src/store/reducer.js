import * as actions from './actions';
const initialState = {
  counter: 0,
  results: []
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
    case actions.STO:
      return {
        ...state,
        results: state.results.concat({ id: new Date(), value: state.counter })
      };
    case actions.DEL:
      const newResults = state.results.filter(result => result.id !== action.id);
      return {
        ...state,
        results: newResults
      };
    default:
      return state;
  }
};
export default reducer;