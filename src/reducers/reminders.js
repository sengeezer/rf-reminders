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
  reminders: [],
  isCurrent: false,
  isCreating: false,
  isGetting: false,
  isUpdating: false,
  isDeleting: false,
};

export default (state = reducerDefaults, action) => {
  // console.log('reducer action:', action);
  switch (action.type) {
    case CREATE_REMINDER_REQUESTED:
      return {
        ...state,
        isCreating: true,
      };
    case CREATE_REMINDER:
      return {
        ...state,
        reminders: [...state.reminders, action.reminder],
        isCreating: !state.isCreating,
      };
    case GET_REMINDER_REQUESTED:
      return {
        ...state,
        isGetting: true,
      };
    case GET_REMINDER:
      return {
        ...state,
        isGetting: !state.isGetting,
      };
    case UPDATE_REMINDER_REQUESTED:
      return {
        ...state,
        isUpdating: true,
      };
    case UPDATE_REMINDER:
      return {
        ...state,
        reminders: state.reminders.map((reminder) => {
          if (reminder.id === action.id) {
            return { ...reminder, ...action.updates };
          }
  
          return reminder;
        }),
        isUpdating: !state.isUpdating,
      };
    case DELETE_REMINDER_REQUESTED:
      return {
        ...state,
        isDeleting: true,
      };
    case DELETE_REMINDER:
      return {
        ...state,
        reminders: state.reminders.filter(({ id }) => id !== action.id),
        isDeleting: !state.isDeleting,
      };
    default:
      return state;
  }
};
