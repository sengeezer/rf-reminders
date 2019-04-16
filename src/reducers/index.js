import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import counter from './counter';
import reminder from './reminder';

export default (history) => combineReducers({
  router: connectRouter(history),
  counter,
  reminder,
});
