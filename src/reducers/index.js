import app from './app.js';
import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';

const rootReducer = combineReducers({
  app,
  form: reduxFormReducer,
});

export default rootReducer;
