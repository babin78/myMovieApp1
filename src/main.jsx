import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./Main.scss";

import { store } from "./store/store";
import { Provider } from "react-redux";

/*
import { reportRecoverableError } from "./reportError";

const container = document.getElementById("root");

const root = createRoot(container, {
  onRecoverableError: (error, errorInfo) => {
    reportRecoverableError({
      error,
      cause: error.cause,
      componentStack: errorInfo.componentStack,
    });
  },
});
root.render(<App />);
*/

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);

//ReactDOM.createRoot(document.getElementById("root")).render(<App />);
