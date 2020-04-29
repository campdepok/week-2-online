import React from "react";

import Navbar from "../components/Navbar";

const Profile = (props) => {
  return (
    <>
      <Navbar />
      <h1>Selamat Datang di Halaman Profile</h1>
      <button
        onClick={() => {
          //   let name = "arkademy";
          //   doSomething(name);
          props.history.push("/");
        }}
      >
        Home
      </button>
      <Navbar />
    </>
  );
};

export default Profile;
