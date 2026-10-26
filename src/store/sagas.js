import { call, put, takeLatest, all, fork } from 'redux-saga/effects';
import { fetchServices, fetchServiceDetails } from '../api/servicesApi';
import {
  SERVICES_LIST_REQUESTED,
  SERVICE_DETAILS_REQUESTED,
  servicesListSucceeded,
  servicesListFailed,
  serviceDetailsSucceeded,
  serviceDetailsFailed,
} from './actions';

function* handleServicesList() {
  try {
    const items = yield call(fetchServices);
    yield put(servicesListSucceeded(items));
  } catch (e) {
    yield put(servicesListFailed(e.message));
  }
}

function* handleServiceDetails(action) {
  try {
    const item = yield call(fetchServiceDetails, action.payload.id);
    yield put(serviceDetailsSucceeded(item));
  } catch (e) {
    yield put(serviceDetailsFailed(e.message));
  }
}

export function* watchServicesList() {
  yield takeLatest(SERVICES_LIST_REQUESTED, handleServicesList);
}

export function* watchServiceDetails() {
  yield takeLatest(SERVICE_DETAILS_REQUESTED, handleServiceDetails);
}

export default function* rootSaga() {
  yield all([
    fork(watchServicesList),
    fork(watchServiceDetails)
  ]);
}