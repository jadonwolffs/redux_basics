import * as actions from "../actions/actions";
import { updateObject } from "../utility";
const initialState = {
  results: []
};

const deleteResult = (state, action) => {
  return { results: state.results.filter(result => result.id !== action.id) };
};
const addResult = (state, action) => {
  return {
    results: state.results.concat({ id: new Date(), value: action.result })
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.STO:
      return updateObject(state, addResult(state, action));
    case actions.DEL:
      return updateObject(state, deleteResult(state, action));
    default:
      return state;
  }
};
export default reducer;
