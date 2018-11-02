import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./common/header";
import { Provider } from "react-redux";
import { GlobalStyle } from "./style.js";
import { IconFont } from "./statics/font/iconfont";
import store from "./store";
import Home from './pages/home'
import Detail from './pages/detail'
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <GlobalStyle />
          <IconFont />
          <Header />
          <BrowserRouter>
            <div>
              <Route path="/" exact component={Home} />
              <Route />
              <Route path="/detail" exact component={Detail} />
              <Route />
            </div>
          </BrowserRouter>
        </div>
      </Provider>
    );
  }
}

export default App;
