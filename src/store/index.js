import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import servicesReducer from './reducer';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(servicesReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;