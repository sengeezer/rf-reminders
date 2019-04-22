export const SET_TEXT_FILTER_REQUESTED = 'reminder/SET_TEXT_FILTER_REQUESTED';
export const SET_TEXT_FILTER = 'reminder/SET_TEXT_FILTER';

export const SORT_BY_AMOUNT_REQUESTED = 'reminder/SORT_BY_AMOUNT_REQUESTED';
export const SORT_BY_AMOUNT = 'reminder/SORT_BY_AMOUNT';

export const SORT_BY_DATE_REQUESTED = 'reminder/SORT_BY_DATE_REQUESTED';
export const SORT_BY_DATE = 'reminder/SORT_BY_DATE';

export const SET_DATE_REQUESTED = 'reminder/SET_DATE_REQUESTED';
export const SET_DATE = 'reminder/SET_DATE';

export const setTextFilter = (text = '') => (
  dispatch => {
    dispatch({
      type: SET_TEXT_FILTER_REQUESTED
    });

    dispatch({
      type: SET_TEXT_FILTER,
      text
    });
  }
);

export const sortByAmount = () => (
  dispatch => {
    dispatch({
      type: SORT_BY_AMOUNT_REQUESTED
    });

    dispatch({
      type: SORT_BY_AMOUNT,
    });
  }
);

export const sortByDate = () => (
  dispatch => {
    dispatch({
      type: SORT_BY_DATE_REQUESTED
    });

    dispatch({
      type: SORT_BY_DATE,
    });
  }
);

export const setDate = date => (
  dispatch => {
    dispatch({
      type: SET_DATE_REQUESTED
    });

    dispatch({
      type: SET_DATE,
      date
    });
  }
);