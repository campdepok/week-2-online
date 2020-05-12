// Component ada 2 jenis
// 1. Class Component (Stateful Component => Component yang memiliki State, Lifecycle dan Props)
// 2. Functional Component (Stateless Component => Component yang hanya memiliki Props)

// const React = require('react')
import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";

import Navbar from "../components/Navbar";
import { loginUser, allEngineer } from "../utils/http";
import Counter from "../components/Counter";
import { getUserActionCreator } from "../redux/actions/consumeAPI";

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
    value: "asc",
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
    // await getUser()
    //   .then((response) => this.setState({ responseAPI: response.data.results }))
    //   .catch((error) => console.log("ERROR", error));
    await this.props.getUserAction();
  }
  componentDidUpdate(_, prevState) {
    if (prevState !== this.state) {
      const { name, date, username, value } = this.state;
      console.log("different state");
      // let qs = "?";
      // if (name) {
      //   qs += `name=${name}`;
      // }
      // if (username) {
      //   qs += `&user=${username}`;
      // }
      this.props.history.push(
        `?name=${name}&date=${date}&user=${username}&sort=${value}`
        // qs
      );
    } else {
      console.log("same state");
    }
  }
  //   shouldComponentUpdate() {
  //     return true;
  //     // return false;
  //   }
  // componentWillUnmount(){}
  render() {
    const { name, date, isLogin, value } = this.state;
    // const { isLoading, isRejected, isFulfilled, responseAPI } = this.props;
    // console.log(isLoading, isRejected, isFulfilled, responseAPI);
    return (
      <>
        <Navbar />
        <h1>{name}</h1>
        <h2>{date}</h2>
        <button onClick={this.changeState}>Ubah State</button>
        <br />
        <Counter />
        <form>
          <label>Dropdown</label>
          <br />
          <select
            value={value}
            onChange={(e) => this.setState({ value: e.target.value })}
          >
            <option value="asc">asc</option>
            <option value="dsc">dsc</option>
          </select>
          <br />
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

const mapStateToProps = ({
  isLoading,
  isRejected,
  isFulfilled,
  responseAPI,
}) => {
  return {
    isLoading,
    isRejected,
    isFulfilled,
    responseAPI,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUserAction: () => {
      dispatch(getUserActionCreator());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
// module.exports = App

//traditional function
//function namaFunction () {}

//arrow function
//namaFunction = () => {}
