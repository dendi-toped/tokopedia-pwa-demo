import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "../components/Header"
import Search from "./Search";
import Product from "./Product";

const RouteWrapper = () => (
  <Fragment>
    <Header />
    <Router>
      <Switch>
        <Route exact path="/" component={Search} />
        <Route path="/p/:slug" component={Product} />
      </Switch>
    </Router>
  </Fragment>
);

export default RouteWrapper;
