export const INC = "INC";
export const DEC = "DEC";
export const SUB = "SUB";
export const ADD = "ADD";
export const STO = "STO";
export const DEL = "DEL";

export const increment = () => {
  return {
    type: INC
  };
};
export const decrement = () => {
  return {
    type: DEC
  };
};
export const subtract = value => {
  return {
    type: SUB,
    value: value
  };
};
export const add = value => {
  return {
    type: ADD,
    value: value
  };
};

export const syncStore = result => {
  return {
    type: STO,
    result: result
  };
};

export const store = result => {
  return dispatch => {
    setTimeout(() => {
      dispatch(syncStore(result));
    },2000);
  };
};
export const del = id => {
  return {
    type: DEL,
    id: id
  };
};
