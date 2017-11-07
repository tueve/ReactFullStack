import React, {Component} from 'react'

//import components
import NavBar from '../components/Nav/Nav'
import TimeDashBoard from './TimeDashBoard/TimeDashBoard'

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div class="container">
        <NavBar/>
        <h1>MY APP</h1>
        <TimeDashBoard/>
      </div>
    )
  }
}

export default App