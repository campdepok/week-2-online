import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "../components/Navbar";
import { countUp } from "../redux/actions/counter";

const Hooks = () => {
  const [count, setCount] = useState("Hello");
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  //   console.log("1");
  useEffect(() => {
    console.log("Use Effect Did Mount");
  }, []);
  //   console.log("2");
  useEffect(() => {
    if (count !== "Hello") console.log(count);
  }, [count]);
  useEffect(() => {
    console.log(counter);
  });
  return (
    <div>
      <Navbar />
      <p>{count}</p>
      <button
        onClick={() => {
          setCount(count + " Hello");
          dispatch(countUp());
        }}
      >
        Click
      </button>
      <Navbar />
    </div>
  );
};

export default Hooks;
