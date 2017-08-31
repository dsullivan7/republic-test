import {
  SEARCH_CHARACTER_REQUESTED
} from '../constants/app';

export const searchCharacter = (query) => {
  return {
    query,
    type: SEARCH_CHARACTER_REQUESTED,
  };
}
