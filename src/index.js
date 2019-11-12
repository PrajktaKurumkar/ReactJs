import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./Containers/App";
//import Application from "./Rahul assignment/Application";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
//ReactDOM.render(<Application />, document.getElementById("root"));
//registerServiceWorker();
