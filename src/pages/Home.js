// Component ada 2 jenis
// 1. Class Component (Stateful Component => Component yang memiliki State, Lifecycle dan Props)
// 2. Functional Component (Stateless Component => Component yang hanya memiliki Props)

// const React = require('react')
import React, { Component } from "react";
import Button from "@material-ui/core/Button";

import Navbar from "../components/Navbar";
import { getUser, loginUser, allEngineer } from "../utils/http";

import "../styles/Home.css";

class Home extends Component {
  // constructor(){}
  state = {
    name: "Home",
    date: "April 28th 2020",
    responseAPI: [],
    username: "",
    password: "",
    token: "",
    isLogin: false,
  };
  changeState = () => {
    this.setState({
      name: "Profile",
      date: "May 1st 2020",
    });
  };
  login = async () => {
    const { username, password } = this.state;
    await loginUser({
      username,
      password,
    })
      .then((response) => {
        localStorage.setItem("token", response.data.result.token);
        this.setState({
          token: response.data.result.token,
          isLogin: true,
        });
      })
      .catch((error) => console.log(error));
    console.log(this.state);
  };
  getAllEngineer = async () => {
    await allEngineer(this.state.token)
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error));
  };
  async componentDidMount() {
    await getUser()
      .then((response) => this.setState({ responseAPI: response.data.results }))
      .catch((error) => console.log("ERROR", error));
  }
  //   componentDidUpdate() {}
  //   shouldComponentUpdate() {
  //     return true;
  //     // return false;
  //   }
  // componentWillUnmount(){}
  render() {
    const { name, date, isLogin } = this.state;
    return (
      <>
        <Navbar />
        <h1>{name}</h1>
        <h2>{date}</h2>
        <button onClick={this.changeState}>Ubah State</button>
        <br />
        <form>
          <label>Username</label>
          <br />
          <input
            type="text"
            onChange={(event) => {
              this.setState({
                username: event.target.value,
              });
            }}
          />
          <br />
          <label>Password</label>
          <br />
          <input
            type="password"
            onChange={(event) => {
              this.setState({
                password: event.target.value,
              });
            }}
          />
        </form>
        <br />
        <Button variant="contained" onClick={this.login}>
          {isLogin ? "Logout" : "Login"}
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={this.getAllEngineer}
        >
          Get All Engineer
        </Button>
        {/* 
        <Button variant="contained" color="secondary">
          Secondary
        </Button>
        <Button variant="contained" disabled>
          Disabled
        </Button>
        <Button variant="contained" color="primary" href="#contained-buttons">
          Link
        </Button> */}
        <Navbar />
      </>
    );
  }
}

export default Home;
// module.exports = App

//traditional function
//function namaFunction () {}

//arrow function
//namaFunction = () => {}
