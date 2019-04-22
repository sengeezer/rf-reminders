import moment from 'moment';

const reducerDefaults = {
    text: '',
    sortBy: 'date',
    date: moment(),
};

export default (state = reducerDefaults, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return { ...state, text: action.text };
    case 'SORT_BY_TIME':
      return { ...state, sortBy: 'amount' };
    case 'SORT_BY_DATE':
      return { ...state, sortBy: 'date' };
    case 'SET_DATE':
      return { ...state, date: action.date };
    default:
      return state;
  }
};