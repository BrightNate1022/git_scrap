import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap/scss/bootstrap.scss"
import 'bootstrap-icons/font/bootstrap-icons.css'

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
