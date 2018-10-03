import express from "express";
import fetch from "isomorphic-fetch";
import markup from "./start";

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
  markup.then(
    function(data) {
      res.send(data);
    },
    function(error) {}
  );
});

app.listen(PORT, () => {});
