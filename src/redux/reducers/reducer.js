import {
  addCounter,
  subCounter,
  getUserAction,
  pending,
  rejected,
  fulfilled,
} from "../actions/actionTypes";

const initialValue = {
  counter: 0,
  responseAPI: [],
  isLoading: false,
  isRejected: false,
  isFulfilled: false,
};

const reducer = (prevState = initialValue, action) => {
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
    case getUserAction + pending:
      return {
        ...prevState,
        isLoading: true,
        isRejected: false,
        isFulfilled: false,
      };
    case getUserAction + rejected:
      return {
        ...prevState,
        isRejected: true,
        isLoading: false,
        responseAPI: action.payload,
      };
    case getUserAction + fulfilled:
      return {
        ...prevState,
        isFulfilled: true,
        isLoading: false,
        responseAPI: action.payload.data.results,
      };
    default:
      return {
        ...prevState,
      };
  }
};

export default reducer;
