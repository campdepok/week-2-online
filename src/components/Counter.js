import React from "react";
import { connect } from "react-redux";

import { countUp, countDown } from "../redux/actions/counter";

const Counter = ({ counter, addCounter, subCounter }) => {
  console.log(counter);
  return (
    <div className="profile-counter">
      <button className="counter-button" onClick={subCounter}>
        -
      </button>
      <h1 className="number-counter">{counter.counter}</h1>
      <button className="counter-button" onClick={addCounter}>
        +
      </button>
    </div>
  );
};

const mapStateToProps = ({ counter }) => {
  return {
    counter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addCounter: () => {
      dispatch(countUp());
    },
    subCounter: () => {
      dispatch(countDown());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
