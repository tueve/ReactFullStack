import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../../redux/actions/TimeDashboardAction';

let createHandlers = dispatch => {
  let updateTimer = (prevName, name, subtitle) => {
    dispatch(actions.UPDATE_TIMER(prevName, name, subtitle));
  };

  return {
    updateTimer
    // other handlers
  };
};

class TimerForm extends Component {
  state = {
    name: this.props.name,
    subtitle: this.props.subtitle,
    error: false
  };

  checkTimer = () => {
    this.setState(
      {
        error:
          this.state.name.length === 0 || this.state.subtitle.length === 0
            ? true
            : false
      },
      () => this.updateTimer()
    );
  };

  updateTimer = () => {
    const { name, subtitle } = this.state;
    createHandlers(this.props.dispatch).updateTimer(
      this.props.name,
      name,
      subtitle
    );
  };

  render() {
    const { name, subtitle, error } = this.state;
    const editBtn = name.length ? 'UPDATE' : 'CREATE';
    return (
      <div>
        <div className="timer__form">
          {error ? <span>Please full fill the form</span> : ''}
          <label htmlFor="project">Project</label>
          <input
            type="text"
            name="project"
            defaultValue={name}
            onChange={e => this.setState({ name: e.target.value })}
          />
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            defaultValue={subtitle}
            onChange={e => this.setState({ subtitle: e.target.value })}
          />
        </div>
        <div className="timer__form-control">
          <button className="col-12 col-sm-6" onClick={() => this.checkTimer()}>
            {editBtn}
          </button>
          <button
            className="col-12 col-sm-6"
            onClick={() => this.props.toggle()}
          >
            CANCEL
          </button>
        </div>
      </div>
    );
  }
}

export default connect()(TimerForm);
