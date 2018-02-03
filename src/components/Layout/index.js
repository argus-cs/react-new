import React, { Component } from 'react'
import s from './layout.css'

class Layout extends Component {
  render() {
    return(
      <div className={`${s.wrapper}`} >
        <h2>teste</h2>
        {this.props.children}
      </div>
    )
  }
}

export default Layout