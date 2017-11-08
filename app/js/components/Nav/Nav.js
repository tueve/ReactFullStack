import React, { Component } from 'react'

class NavBar extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <nav class="component-navbar">
        <div class="logo"></div>
        <div class="component-navbar__wrapper">
          <ul class="component-navbar__list-items">
            <li class="component-navbar__list-item">HOME</li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default NavBar