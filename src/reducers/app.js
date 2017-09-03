import { fromJS } from 'immutable'

import {
  SEARCH_CHARACTER_REQUESTED,
  SEARCH_CHARACTER_SUCCEEDED,
  SEARCH_CHARACTER_FAILED,
  SEARCH_CHARACTER_CLEAR_ERROR,
} from '../constants/app';

const initialState = fromJS({ characters: [], houses: {}, loading: false, requestError: false });

export default (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_CHARACTER_REQUESTED:
      return state.merge({characters: [], loading: true, requestError: false});
    case SEARCH_CHARACTER_SUCCEEDED:
      return state.merge({characters: action.characters, houses: action.houses, loading: false, requestError: false});
    case SEARCH_CHARACTER_FAILED:
      return state.merge({characters: [], loading: false, requestError: true});
    case SEARCH_CHARACTER_CLEAR_ERROR:
      return state.merge({requestError: false});

    default:
      return state;
  }
};
