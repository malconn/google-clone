import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import App from "./App";
import { Routers } from "./components/Routers";
import "./global.css";

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/" element={<Routers />}></Route>
    </Routes>
  </Router>,
  document.getElementById("root")
);
