import { getUserAction } from "./actionTypes";
import { getUser } from "../../utils/http";

export const getUserActionCreator = () => {
  return {
    type: getUserAction,
    payload: getUser(),
  };
};
