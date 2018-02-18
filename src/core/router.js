import React from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import loadable from 'react-loadable'

// import routes
const Loading = () => <div>Loading...</div>

const Home = loadable({
  loader: () => import('../containers/Home'),
  loading: Loading
})

export default props => (
  <Router>
    <Switch>
      <Route path="/" component={Home} />
    </Switch>
  </Router>
)