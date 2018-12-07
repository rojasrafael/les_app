import React from "react";
// import devtoolsEnhancer from "remote-redux-devtools";
import { composeWithDevTools } from "remote-redux-devtools";

/* ROUTER É UM COMPONENTE ONDE FICARAO AS REFERENCIAS DE TODAS AS PAGINAS DA APLICAÇÃO */
import Router from "./Router";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";

import rootReducer from "./reducers";

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(reduxThunk)));

const ArvoreApp = prop => (
  <Provider store={store}>
    <Router />
  </Provider>
);

export default ArvoreApp;