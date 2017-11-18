import React, { Component } from 'react';
import TimeDashBoardAction from '../../redux/actions/TimeDashboardAction';
import Timer from './Timer';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class TimeDashBoard extends Component {
  render() {
    return (
      <div className="container">
        TIME DASH BOARD
        <div className="row">
          <Timer />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ timer: state });
const mapDispatchToProps = dispatch => ({
  action: bindActionCreators(TimeDashBoardAction, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(TimeDashBoard);
