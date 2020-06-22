import * as types from './actionTypes';
import { formatDate } from './../share/formatDate';

const initialState = {
  isLoading: false,
  lastDate: formatDate(new Date()),
  pictures: [],
}

export function pictureListReducer(state = initialState, action) {
  switch (action.type) {

    case types.UPLOAD_PICTURE:
      console.log(state);
      return ({
        ...state,
        isLoading: true,
      })

    case types.UPLOAD_PICTURE_SUCCESS:
      let picture = {
        mediaType: action.payload.media_type,
        todayPicture: action.payload.hdurl,
        date: action.payload.date,
        title: action.payload.title,
      }
      
      let countDate = new Date(state.lastDate);
      countDate.setDate(countDate.getDate()-1);

      console.log(state.pictures);

      return({
        isLoading: false,
        lastDate: formatDate(countDate),
        pictures: state.pictures.concat([picture]),
      })

    default:
      return state;
  }
}