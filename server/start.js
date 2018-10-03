import React from "react";
import { renderToString } from "react-dom/server";
//import { Loadable, Capture } from "react-loadable";
//import { getBundles } from "react-loadable/webpack";
import serialize from "serialize-javascript";
import App from "../views";
import { fetchPopularRepos } from "../api/user";
import { resolve } from "path";

const modules = [];

let markup = new Promise((resolve, reject) => {
  const name = "Text";
  const html = renderToString(<App data={name} />);

  const result = `<!doctype html><html>
      <head>
        <script>window.__INITIAL_DATA__ = ${JSON.stringify(name)}</script>    
      </head>
      <body>
          <div id="app">${html}</div>                      
    
          <script src="/client/client.js"></script>      
          
      </body>
      </html>
      `;
  resolve(result);
});

export default markup;
