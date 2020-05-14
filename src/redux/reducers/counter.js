import { addCounter, subCounter } from "../actions/actionTypes";

const initialValue = {
  counter: 0,
  addBy: 2,
};

const counterReducer = (prevState = initialValue, action) => {
  switch (action.type) {
    case addCounter:
      return {
        ...prevState,
        counter: prevState.counter + 1,
      };
    case subCounter:
      return {
        ...prevState,
        counter: prevState.counter - 1,
      };
    default:
      return {
        ...prevState,
      };
  }
};

export default counterReducer;
