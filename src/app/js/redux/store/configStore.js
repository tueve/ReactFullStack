import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index';
import { composeWithDevTools } from 'redux-devtools-extension';

const configStore = () =>
  createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default configStore;
