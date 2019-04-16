import {
  CREATE_REMINDER_REQUESTED,
  CREATE_REMINDER,
  GET_REMINDER_REQUESTED,
  GET_REMINDER,
  UPDATE_REMINDER_REQUESTED,
  UPDATE_REMINDER,
  DELETE_REMINDER_REQUESTED,
  DELETE_REMINDER,
} from '../actions/reminder';

const reducerDefaults = {
  month: '04',
  day: '02',
  year: '2019',
  time: '00:00',
  text: 'Reminder',
  color: 'blue',
  isCurrent: false,
};

export default (state = reducerDefaults, action) => {
  switch (action.type) {
    case CREATE_REMINDER_REQUESTED:
      return state;
    case CREATE_REMINDER:
      return state;
    case GET_REMINDER_REQUESTED:
      return state;
    case GET_REMINDER:
      return state;
    case UPDATE_REMINDER_REQUESTED:
      return state;
    case UPDATE_REMINDER:
      return state;
    case DELETE_REMINDER_REQUESTED:
      return state;
    case DELETE_REMINDER:
      return state;
    default:
      return state;
  }
};
