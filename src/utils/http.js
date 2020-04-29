import Axios from "axios";

const URL_STRING = "https://randomuser.me/api";
const URL_API = "https://api.tatas.tech";

export const getUser = () => {
  return Axios.get(URL_STRING);
};

export const loginUser = (body) => {
  return Axios.post(`${URL_API}/auth/login`, body);
};

export const allEngineer = (token) => {
  return Axios.get(`${URL_API}/engineer`, {
    headers: {
      "x-access-token": token,
    },
  });
};
