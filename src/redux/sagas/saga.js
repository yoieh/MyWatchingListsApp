import {
  put,
  all
} from 'redux-saga/effects';

import {
  FETCHING_DATA_SUCCESS,
  FETCHING_DATA_FAILURE
} from '../constants';

// Generator for fetching all data from API service
export default function* fetchData(action) {
  try {
    const data = [1,2,3]
    yield put({
      type: FETCHING_DATA_SUCCESS,
      data
    })

  } catch (e) {
    yield put({
      type: FETCHING_DATA_FAILURE
    })
  }
}