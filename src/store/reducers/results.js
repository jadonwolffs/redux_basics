import * as actions from '../actions';
const initialState = {
  results: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.STO:
      return {
        ...state,
        results: state.results.concat({ id: new Date(), value: action.result})
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