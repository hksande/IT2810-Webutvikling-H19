import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";

import { Provider } from "react-redux";
import store from "./store/configureStore";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql"
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <App />
    </Provider>
  </ApolloProvider>,
  document.getElementById("root")
);
