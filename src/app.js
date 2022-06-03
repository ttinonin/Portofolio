import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./routers/AppRouter";
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const appRoot = document.getElementById("appRoot");
ReactDOM.render(<AppRouter />, appRoot);