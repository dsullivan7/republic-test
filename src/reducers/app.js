import { fromJS } from 'immutable'

import {
  SEARCH_CHARACTER_REQUESTED,
  SEARCH_CHARACTER_SUCCEEDED,
  SEARCH_CHARACTER_FAILED
} from '../constants/app';

const initialState = fromJS({ characters: [], loading: false });

export default (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_CHARACTER_REQUESTED:
      return state.merge({characters: [], loading: true});
    case SEARCH_CHARACTER_SUCCEEDED:
      return state.merge({characters: action.characters, loading: false});
    case SEARCH_CHARACTER_FAILED:
      return state.merge({characters: [], loading: false, error: true});

    default:
      return state;
  }
};
