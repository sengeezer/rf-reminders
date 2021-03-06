export const CREATE_REMINDER_REQUESTED = 'reminder/CREATE_REMINDER_REQUESTED';
export const CREATE_REMINDER = 'reminder/CREATE_REMINDER';

export const GET_REMINDER_REQUESTED = 'reminder/GET_REMINDER_REQUESTED';
export const GET_REMINDER = 'reminder/GET_REMINDER';

export const UPDATE_REMINDER_REQUESTED = 'reminder/UPDATE_REMINDER_REQUESTED';
export const UPDATE_REMINDER = 'reminder/UPDATE_REMINDER';

export const DELETE_REMINDER_REQUESTED = 'reminder/DELETE_REMINDER_REQUESTED';
export const DELETE_REMINDER = 'reminder/DELETE_REMINDER';

export const createReminder = reminder => (
  dispatch => {
    dispatch({
      type: CREATE_REMINDER_REQUESTED
    });

    dispatch({
      type: CREATE_REMINDER,
      reminder
    });
  }
);

export const getReminder = () => (
  dispatch => {
    dispatch({
      type: GET_REMINDER_REQUESTED
    });

    dispatch({
      type: GET_REMINDER
    });
  }
);

export const updateReminder = (id, updates) => (
  dispatch => {
    dispatch({
      type: UPDATE_REMINDER_REQUESTED
    });

    dispatch({
      type: UPDATE_REMINDER,
      id,
      updates,
    });
  }
);

export const deleteReminder = ({ id } = {}) => (
  dispatch => {
    dispatch({
      type: DELETE_REMINDER_REQUESTED
    });

    dispatch({
      type: DELETE_REMINDER,
      id
    });
  }
);
