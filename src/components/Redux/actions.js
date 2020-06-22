import * as types from './actionTypes';

export const uploadTodayPictureAction = (payload) => {
  return ({
    type: types.UPLOAD_TODAY_PICTURE,
    payload
  })
}

export const uploadTodayPictureSuccessAction = (payload) =>{
  return({
    type: types.UPLOAD_TODAY_PICTURE_SUCCESS,
    payload
  })
}

export const uploadTodayPictureFailedAction = () => {
  return({
    type: types.UPLOAD_TODAY_PICTURE_FAILED,
  })
}

export const uploadPictureAction = (payload) => {
  return({
    type: types.UPLOAD_PICTURE,
    payload,
  })
}

export const uploadPictureSuccessAction = (payload) => {
  return({
    type: types.UPLOAD_PICTURE_SUCCESS,
    payload,
  })
}

export const uploadPictureFailedAction = () => {
  return({
    type: types.UPLOAD_PICTURE_FAILED,
  })
}