import {
  takeEvery
} from 'redux-saga/effects';

import fetchData from './saga';

import {
  FETCHING_DATA,
} from '../constants';

// Sagas root
export default function* sagas() {
  yield takeEvery(FETCHING_DATA, fetchData)
}