import React from "react";

import { Route, Navigate, Routes } from "react-router-dom";
import Results from "./Results";

export const Routers = () => {
  return (
    <div className="p-4">
      <Route exact path="/">
        <Navigate to="/search" />
      </Route>
      <Route exact path={["/search", "/news", "/images", "/videos"]}>
        <Results />
      </Route>
    </div>
  );
};
