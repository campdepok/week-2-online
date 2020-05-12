import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import store from "./redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Route path="/" exact component={Home} /> {/* localhost:3000/ */}
        <Route path="/profile" component={Profile} />{" "}
        {/* localhost:3000/profile */}
      </Router>
    </Provider>
  );
};

export default App;
