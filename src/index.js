import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import App from "./App";
import "./global.css";

ReactDOM.render(
  <Router>
      <Route path="/">
        <App />
      </Route>
  </Router>,
  document.getElementById("root")
);
