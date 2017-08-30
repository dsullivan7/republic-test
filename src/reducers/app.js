import {
  DEFAULT_ACTION
} from '../actions/app';

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;

    default:
      return state;
  }
};
