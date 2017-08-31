import { call, put, takeEvery } from 'redux-saga/effects'
import { fetchCharacter } from '../clients'

function* searchCharacter(action) {
   try {
      const user = yield call(Api.fetchUser);
      yield put({type: "USER_FETCH_SUCCEEDED", user: user});
   } catch (e) {
      yield put({type: "USER_FETCH_FAILED", message: e.message});
   }
}

function* appSaga() {
  yield takeEvery("USER_FETCH_REQUESTED", searchCharacter);
}
