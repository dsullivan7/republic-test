import { fromJS } from 'immutable'

import {
  SEARCH_CHARACTER
} from '../constants/app';

const initialState = fromJS({ character: {} });

export default (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_CHARACTER:
      return state.mergeDeep({character: {name: 'MyName'}});

    default:
      return state;
  }
};
