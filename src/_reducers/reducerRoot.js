import { combineReducers } from 'redux';
import app from './app';
import login from './login';
import notification from './notification'
import signup from './signup'
import footer from './footer'

const rootReducer = combineReducers({
  app,
  login,
  notification,
  signup,
  footer,
});

export default rootReducer;