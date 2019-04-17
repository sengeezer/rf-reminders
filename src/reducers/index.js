import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import counter from './counter';
import reminders from './reminders';

export default (history) => combineReducers({
  router: connectRouter(history),
  counter,
  reminders,
});
