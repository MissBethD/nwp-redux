import "./index.css";
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./store";

import Counter from "./components/counter-local";
import CounterReduxLike from "./components/counter-redux-like";
import CounterRedux from "./components/counter-redux";
import CounterReduxConnect from "./components/counter-redux-connect";

const App = () => (
  <div>
    <header className="gradient">
      <div className="inner">
        <section id="masthead">
          <h1 className="title">NWP: Intro to Redux.</h1>
          <Counter />
        </section>
      </div>
    </header>
    <main>
      <div className="gradient is-white">
        <div className="inner">
          <div className="content has-text-centered">
            <h2>Local State</h2>
            <Counter />
          </div>
        </div>
      </div>
      <div className="gradient is-light-gray">
        <div className="inner">
          <div className="content has-text-centered">
            <h2>Local State - Redux-like</h2>
            <CounterReduxLike />
          </div>
        </div>
      </div>
      <div className="gradient is-white">
        <div className="inner">
          <div className="content has-text-centered">
            <h2>Redux without Connect</h2>
            <CounterRedux />
          </div>
        </div>
      </div>
      <div className="gradient is-light-gray">
        <div className="inner">
          <div className="content has-text-centered">
            <h2>Redux with Connect</h2>
            <Provider store={store}>
              <CounterReduxConnect />
            </Provider>
          </div>
        </div>
      </div>
    </main>
  </div>
);

render(<App />, document.getElementById("root"));
