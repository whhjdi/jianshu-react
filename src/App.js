import React, { Component } from "react";
import Header from "./common/header";
import { Provider } from "react-redux";
import { GlobalStyle } from "./style.js";
import { IconFont } from "./statics/font/iconfont";
import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <GlobalStyle />
          <IconFont />
          <Header />
        </div>
      </Provider>
    );
  }
}

export default App;
