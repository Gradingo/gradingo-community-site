import * as React from "react"
import { Component } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from '../home/home'
import Schedule from "../schedule/schedule"
import Requests from "../requests/request"
class App extends Component {
    render() {
        return (
            <div>
                
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/schedule" component={Schedule} />
              <Route exact path="/requests" component={Requests} />
            </Switch>
          </Router>
            </div>
        )
    }
}
export default App