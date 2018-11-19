import React, { Component, Fragment } from "react";
import Profile from "../views/Profile";

export const routes = [
  {
    path: "/",
    exact: true,
    render: () => <div>1</div>
  },
  {
    path: "/:id",
    component: Profile
  }
];
