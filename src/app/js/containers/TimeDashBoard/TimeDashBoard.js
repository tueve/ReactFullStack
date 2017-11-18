import React, { Component } from 'react';
import TimeDashBoardAction from '../../redux/actions/TimeDashboardAction';
import TimerList from '../../components/TimeDashBoard/TimerList';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class TimeDashBoard extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="container">
        TIME DASH BOARD
        <TimerList timerList={this.props.timer} />
      </div>
    );
  }
}

const mapStateToProps = state => ({ ...state });
const mapDispatchToProps = dispatch => ({
  action: bindActionCreators(TimeDashBoardAction, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(TimeDashBoard);
