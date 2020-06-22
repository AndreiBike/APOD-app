import {createStore, combineReducers, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {pictureReducer} from './pictureReducer';
import {pictureListReducer} from './pictureListReducer';
import {getTodayPictureSaga, getPictureSaga} from './sessionSaga';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';



const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: 'pictures',
  storage: storage,
  whitelist: ['todayPictureState'],
}

const reducers = combineReducers ({
  todayPictureState: pictureReducer,
  listPictureState: pictureListReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

const reduxStore = createStore(persistedReducer, applyMiddleware(sagaMiddleware));
const reduxPersistor = persistStore(reduxStore);
sagaMiddleware.run(getTodayPictureSaga);
sagaMiddleware.run(getPictureSaga);

export default ()=>{
  return({
    reduxStore,
    reduxPersistor,
  });
};