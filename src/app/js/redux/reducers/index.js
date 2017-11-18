import { combineReducers } from 'redux';
import timerDashBoardReducer from './TimeDashBoardReducers';

const rootReducer = combineReducers({
  timerReducer: timerDashBoardReducer
});

export default rootReducer;
