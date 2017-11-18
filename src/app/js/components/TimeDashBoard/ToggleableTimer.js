import React, { Component } from 'react';
import Timer from './Timer';
import TimerForm from './TimerForm';

class ToggleableTimer extends Component {
  state = {
    timer: true
  };

  toggleForm = () => {
    this.setState({ timer: !this.state.timer });
  };

  render() {
    const { title, subtitle, id } = this.props;
    return (
      <div className="col-12 col-sm-3 timer">
        TIMER TOGGLE
        {this.state.timer ? (
          <Timer
            toggle={this.toggleForm}
            name={title}
            id={id}
            subtitle={subtitle}
          />
        ) : (
          <TimerForm
            toggle={this.toggleForm}
            name={title || ''}
            id={id}
            subtitle={subtitle || ''}
          />
        )}
      </div>
    );
  }
}

export default ToggleableTimer;
