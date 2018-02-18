import React, { Component } from 'react'
import s from './layout.css'

class Layout extends Component {
  render() {
    return(
      <div className={`${s.wrapper}`} >
        {this.props.children}
      </div>
    )
  }
}

export default Layout