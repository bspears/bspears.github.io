
import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import { store } from "./stores/store.js";
import { Provider } from "react-redux";

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);