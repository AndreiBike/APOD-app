import * as types from './actionTypes';
import { put, call, takeEvery } from 'redux-saga/effects';
import {uploadTodayPictureSuccessAction, uploadPictureSuccessAction} from './actions';

export function* getTodayPictureSaga() {
  yield takeEvery(types.UPLOAD_TODAY_PICTURE, getTodayPictureAsync);
}

async function getTodayPictureFromInet(date) {
  const response = await fetch(`https://api.nasa.gov/planetary/apod?date=${date}&api_key=LmfU3hE27rUYuuuaFvic4ocwNLlgJOwpgTvc40Pn`);
  return response.json();
}

function* getTodayPictureAsync(action) {
  try {
    let response = yield call(()=>getTodayPictureFromInet(action.payload.date));
    yield put(uploadTodayPictureSuccessAction(response))
  } catch{
    console.log("Error in saga");
  }
}

export function* getPictureSaga() {
  yield takeEvery(types.UPLOAD_PICTURE, getPictureAsync)
}

function* getPictureAsync(action){
  try{
    let response = yield call(()=>getTodayPictureFromInet(action.payload.date));
    yield put(uploadPictureSuccessAction(response))
  } catch (e) {
    console.log(e);
  }
}