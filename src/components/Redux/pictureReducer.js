import * as types from './actionTypes';
import {formatDate} from './../share/formatDate';

const initialState = {
  isLoading: true,
  mediaType: 'image',
  title: '',
  todayPicture: '',
  date: formatDate(new Date()),
}

export function pictureReducer(state = initialState, action) {
  switch (action.type) { 

    case types.UPLOAD_TODAY_PICTURE:
      return ({
        ...state,
        isLoading: true,
      })

    case types.UPLOAD_TODAY_PICTURE_SUCCESS:
      return ({
        mediaType: action.payload.media_type,
        todayPicture: action.payload.hdurl,
        date: action.payload.date,
        title: action.payload.title,
        isLoading: false,
      })

    default:
      return state;
  }
}