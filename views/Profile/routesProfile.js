import React, { Component, Fragment } from "react";

export const routesProfile = [
  {
    path: "/:id/albums",
    render: () => <div>3</div>,        
  },
  {
    path: "/:id/messages",
    render: () => <div>4</div>,        
  },
  {
    path: "/:id",
    render: () => <div>2</div>,
    
  }
];
