import React, { Component } from 'react'
import Layout from '../../components/Layout'
import s from './Home.css'

class Home extends Component{

  componentDidMount() {
    this.props.gitFetch(`argus-cs`)
  }

  render(){
    const {isFetching, data, error} = this.props.userInfo

    return(
      <Layout>
        {isFetching ?  
          <p>loading...</p>
          :
          <p>{data.name}</p>
        }
      </Layout>
    )
  }
}

export default Home