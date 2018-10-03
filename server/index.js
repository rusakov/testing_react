import express from "express";
import fetch from "isomorphic-fetch";
import markup from "./start";
import { matchPath } from "react-router-dom";
import routes from "../routes";

const PORT = 3000;

var app = express();

// const start = await function() {
//   let user = fetch("//randomuser.me/api/")
//     .then(response => {
//       return response.json();
//     })
//     .then(response => {
//       console.log(response.results[0]);
//       this.setState({
//         user: response.results[0]
//       });
//     });
// };

app.use(express.static("build"));

app.get("*", (req, res, next) => {
  const activeRoute = routes.find(route => matchPath(req.url, route)) || {};
  const promise = activeRoute.fetchInitialData
    ? activeRoute.fetchInitialData(req.path)
    : Promise.resolve();

  promise
    .then(data => {
      res.send(markup(data));
    })
    .catch(next);
});

app.listen(PORT, () => {});
