import {
  SEARCH_CHARACTER_REQUESTED,
  SEARCH_CHARACTER_CLEAR_ERROR
} from '../constants/app';

export const searchCharacter = (query) => {
  return {
    query,
    type: SEARCH_CHARACTER_REQUESTED,
  };
}

export const clearSearchCharacterError = () => {
  return {
    type: SEARCH_CHARACTER_CLEAR_ERROR,
  };
}
