const initialState = {
  counter: 0,
  results: []
};

const reducer = (state = initialState, action) => {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case "INC":
      newState.counter = state.counter + 1;
      return newState;
    case "DEC":
      return {
        ...state,
        counter: state.counter - 1
      };
    case "ADD":
      return {
        ...state,
        counter: state.counter + action.value
      };
    case "SUB":
      return {
        ...state,
        counter: state.counter - action.value
      };
    case "STO":
      return {
        ...state,
        results: state.results.concat({ id: new Date(), value: state.counter })
      };
    case "DEL":
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
