import { UPDATE_CALENDAR } from '../actions';

const calendar = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_CALENDAR:
      return action.jsonData;
    default:
      return state;
  }
}

export default calendar;
