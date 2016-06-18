import React from 'react'
import Stateless from '../components/stateless-sample'

export default class Home extends React.Component {
  render () {
    return <div>
      <h2>Home route</h2>
      <Stateless name='stranger' />
      <p>you can try editing it as you like to test this out</p>

    </div>
  }
}
