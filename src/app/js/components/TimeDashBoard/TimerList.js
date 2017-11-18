import React, { Component } from 'react';
import ToggleableTimer from './ToggleableTimer';

class TimerList extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="row">
        {this.props.timerList.map((item, index) => (
          <ToggleableTimer
            key={item.id}
            title={item.name}
            subtitle={item.subtitle}
          />
        ))}
      </div>
    );
  }
}

export default TimerList;
