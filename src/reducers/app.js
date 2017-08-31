import { fromJS } from 'immutable'

import {
  SEARCH_CHARACTER_REQUESTED,
  SEARCH_CHARACTER_SUCCEEDED,
  SEARCH_CHARACTER_FAILED
} from '../constants/app';

const initialState = fromJS({ characters: [] });

export default (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_CHARACTER_REQUESTED:
      return state.mergeDeep({characters: [], loading: true});
    case SEARCH_CHARACTER_SUCCEEDED:
      return state.mergeDeep({characters: action.characters, loading: false});
    case SEARCH_CHARACTER_FAILED:
      return state.mergeDeep({characters: [], loading: false, error: true});

    default:
      return state;
  }
};
