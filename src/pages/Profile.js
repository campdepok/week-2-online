import React from "react";
import { connect } from "react-redux";

import Navbar from "../components/Navbar";
import Counter from "../components/Counter";

const Profile = ({ history, responseAPI }) => {
  // console.log(dispatch);
  // const subCounter = () => {
  //   dispatch(countDown());
  // };
  // const addCounter = () => {
  //   dispatch(countUp());
  // };
  console.log(responseAPI);
  return (
    <>
      <Navbar />
      <h1>Selamat Datang di Halaman Profile</h1>
      <Counter />
      <button
        onClick={() => {
          //   let name = "arkademy";
          //   doSomething(name);
          history.push("/");
        }}
      >
        Home
      </button>
      <Navbar />
    </>
  );
};

const mapStateToProps = ({ responseAPI }) => {
  return {
    responseAPI,
  };
};

export default connect(mapStateToProps)(Profile);
