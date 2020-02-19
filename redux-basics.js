const redux = require("redux");
const createStore = redux.createStore;

const initialState = { counter: 0 };

//reducer
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INC_COUNTER":
      return {
        ...state,
        counter: state.counter + 1
      };
      break;
    case "ADD_COUNTER":
      return {
        ...state,
        counter: state.counter + action.value
      };
      break;
      case "SUB_COUNTER":
      return {
        ...state,
        counter: state.counter - action.value
      };
      break;
      case "DEC_COUNTER":
      return {
        ...state,
        counter: state.counter -1
      };
      break;
    default:
      break;
  }
  return state;
};

//store
const store = createStore(rootReducer);
console.log(store.getState());

//subsription
store.subscribe(() => {
    console.log("[Subscription]", store.getState());
  });

//dispatching action
store.dispatch({ type: "INC_COUNTER" });
store.dispatch({ type: "ADD_COUNTER", value: 10 });
store.dispatch({type:'SUB_COUNTER',value:10});
store.dispatch({type:'DEC_COUNTER'});
console.log(store.getState());