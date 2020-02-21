import * as actions from './actions';
export const increment = () => {
    return {
      type: actions.INC
    };
  };
  export const decrement = () => {
    return {
      type: actions.DEC
    };
  };
  export const subtract = value => {
    return {
      type: actions.SUB,
      value: value
    };
  };
  export const add = value => {
    return {
      type: actions.ADD,
      value: value
    };
  };