import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./pages/Home";
import Profile from "./pages/Profile";

const App = () => {
  return (
    <Router>
      <Route path="/" exact component={Home} /> {/* localhost:3000/ */}
      <Route path="/profile" component={Profile} /> {/* localhost:3000/profile */}
    </Router>
  );
};

export default App;
