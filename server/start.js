import React from "react";
import { renderToString } from "react-dom/server";
//import { Loadable, Capture } from "react-loadable";
//import { getBundles } from "react-loadable/webpack";
import serialize from "serialize-javascript";
import App from "../views";
import { fetchPopularRepos } from "../api/user";
import { resolve } from "path";
import { StaticRouter } from "react-router-dom";

const modules = [];

let markup = req => {
  const name = "Text";
  let context = {};

  console.log(req.url);
  const html = renderToString(
    <StaticRouter location={req.url} context={context}>
      <App data={name} />
    </StaticRouter>
  );

  const result = `<!doctype html><html>
      <head>
        <script>window.__INITIAL_DATA__ = ${JSON.stringify(
          context
        )}</script>    
      </head>
      <body>
          <div id="app">${html}</div>                      
    
          <script src="/client/client.js"></script>      
          
      </body>
      </html>
      `;

  return result;
};

export default markup;
