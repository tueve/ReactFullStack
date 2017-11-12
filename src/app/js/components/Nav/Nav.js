import React, { Component } from 'react';
import logo from '../../../../assets/img/logo.svg';
import { NavLink } from 'react-router-dom';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  render() {
    const burgerClass = this.state.isOpen
      ? 'component-nav__icon open'
      : 'component-nav__icon';
    const listClass = this.state.isOpen
      ? 'component-nav__list-items__wrapper open'
      : 'component-nav__list-items__wrapper';

    return (
      <nav className="container">
        <div className="row component-nav">
          <div className="component-nav__logo " />
          <div
            className={burgerClass}
            onClick={() => this.setState({ isOpen: !this.state.isOpen })}
          >
            <span />
            <span />
            <span />
            <span />
          </div>
          <div className={listClass}>
            <ul className="component-nav__list-items__content">
              <li>
                <NavLink
                  className="component-nav__list-items__item"
                  to="/"
                  exact
                  activeClassName="active"
                >
                  HOME
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/timedashboard"
                  className="component-nav__list-items__item"
                  exact
                  activeClassName="active"
                >
                  TIME WATCH
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="component-nav__list-items__item"
                  to="/githubdashboard"
                  exact
                  activeClassName="active"
                >
                  GITHUB API
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
