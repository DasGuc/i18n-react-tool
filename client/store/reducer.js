import { combineReducers } from 'redux';
import { routerStateReducer } from 'redux-router';
import * as actions from './actions';

export default combineReducers({
  router: routerStateReducer,
  lang: actions.lang
});
