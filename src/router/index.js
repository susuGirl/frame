import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import App from '../views/App'
import First from '../views/First'
import Second from '../views/Second'
import Third from '../views/Third'

class ConfigRouter extends Component {
  constructor(props) {
    super(props);
  };

  render () {
    console.log('wo xuan rang le')
    return (
      <Router>
        <App>
          <Switch>
            <Route exact path="/" component={First} />
            <Route path="/second" component={Second}/>
            <Route path="/third" component={Third} />
            <Redirect to="/" />
          </Switch>
        </App>
      </Router>
    )
  }
}
export default ConfigRouter;