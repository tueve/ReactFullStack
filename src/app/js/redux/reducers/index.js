import { combineReducers } from 'redux';
import timerDashBoardReducer from './TimeDashBoardReducers';

const rootReducer = combineReducers({
  timer: timerDashBoardReducer
});

export default rootReducer;
