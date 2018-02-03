import React, { Component } from 'react'
import { Provider } from 'react-redux'
import Router from './router'

class App extends Component {
  render() {
    const { store } = this.props
    return(
      <Provider store={store} >
        <Router />
      </Provider>
    )
  }
}

export default App