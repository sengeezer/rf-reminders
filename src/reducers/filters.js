import {
  SET_TEXT_FILTER_REQUESTED,
  SET_TEXT_FILTER,
  SORT_BY_TIME_REQUESTED,
  SORT_BY_TIME,
  SORT_BY_DATE_REQUESTED,
  SORT_BY_DATE,
  SET_DATE_REQUESTED,
  SET_DATE,
} from '../actions/filters';

import moment from 'moment';

const reducerDefaults = {
    text: '',
    sortBy: 'date',
    date: moment(),
    isSettingTextFilter: false,
    isSortingByTime: false,
    isSortingByDate: false,
    isSettingDate: false,
};

export default (state = reducerDefaults, action) => {
  switch (action.type) {
    case SET_TEXT_FILTER_REQUESTED:
      return {
        ...state,
        isSettingTextFilter: true,
      };
    case SET_TEXT_FILTER:
      return {
        ...state,
        text: action.text,
        isSettingTextFilter: !state.isSettingTextFilter,
      };
    case SORT_BY_TIME_REQUESTED:
      return {
        ...state,
        isSortingByTime: true,
      };
    case SORT_BY_TIME:
      return {
        ...state,
        sortBy: 'amount',
        isSortingByTime: !state.isSortingByTime,
      };
    case SORT_BY_DATE_REQUESTED:
      return {
        ...state,
        isSortingByDate: true,
      };
    case SORT_BY_DATE:
      return {
        ...state,
        sortBy: 'date',
        isSortingByDate: !state.isSortingByDate,
      };
    case SET_DATE_REQUESTED:
      return {
        ...state,
        isSettingDate: true,
      };
    case SET_DATE:
      return {
        ...state,
        date: action.date,
        isSettingDate: !state.isSettingDate,
      };
    default:
      return state;
  }
};