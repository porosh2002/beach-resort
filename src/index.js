import React from "react";
import ReactDOM from "react-dom";
import App from "./Component/App/App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { createStore, applyMiddleware} from "redux";
import { rooms_fields } from "./reducer";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
const logger = createLogger();
const store = createStore(
  rooms_fields,
  applyMiddleware(thunkMiddleware, logger)
);
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
serviceWorker.unregister();
