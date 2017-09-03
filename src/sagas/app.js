import { all, call, put, select, takeEvery } from 'redux-saga/effects'
import { fetchCharacter, fetchHouse } from '../clients/gotClient'

import {
  SEARCH_CHARACTER_REQUESTED,
  SEARCH_CHARACTER_SUCCEEDED,
  SEARCH_CHARACTER_FAILED
} from '../constants/app';

const getHouses = (state) => state.app.get('houses').toJS()

function* searchCharacter(action) {
  try {
    const characters = yield call(fetchCharacter, action.query);
    const houses = yield select(getHouses);

    const houseRequests = {};

    // retreive the houses for each character
    characters.forEach(character =>
      character.allegiances.forEach(allegiance => {

        // get the houseId from the house URL
        const houseId = allegiance.split('/').pop();

        // if we do not have the house stored already
        // call the house api using the api client and store the result in the state
        if (!houses[houseId] && !houseRequests[houseId]) {
          houseRequests[houseId] = call(fetchHouse, houseId);
        }
      })
    )

    // make all the house requests in parallel
    const houseIds = Object.keys(houseRequests);
    const houseResults = yield all(houseIds.map(id => houseRequests[id]));
    houseIds.forEach((id, idx) => { houses[id] = houseResults[idx] });

    yield put({type: SEARCH_CHARACTER_SUCCEEDED, characters, houses});
  } catch (e) {
    yield put({type: SEARCH_CHARACTER_FAILED, message: e.message});
  }
}

function* appSaga() {
  yield takeEvery(SEARCH_CHARACTER_REQUESTED, searchCharacter);
}

export default appSaga;
