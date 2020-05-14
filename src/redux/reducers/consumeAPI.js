import {
  getUserAction,
  pending,
  rejected,
  fulfilled,
} from "../actions/actionTypes";

const initialValue = {
  responseAPI: [],
  isLoading: false,
  isRejected: false,
  isFulfilled: false,
};

const consumeAPIReducer = (prevState = initialValue, action) => {
  switch (action.type) {
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

export default consumeAPIReducer;
