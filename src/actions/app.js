import {
  SEARCH_CHARACTER_REQUESTED
} from '../constants/app';

export const searchCharacter = () => {
  return {
    type: SEARCH_CHARACTER_REQUESTED,
  };
}
