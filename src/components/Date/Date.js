import React from 'react';
import { connect } from 'react-redux';
import { uploadTodayPictureAction } from './../Redux/actions';
import './Date.css';
import { formatDate } from '../share/formatDate';

const DateChooserAPI = (props) => {

  const dataRef = React.createRef();

  const dateChanged = () => {
    props.uploadPicture({date: dataRef.current.value});
  }

  return (
    <div className="date">
      <p>Choose the date</p>
      <div>
        <input defaultValue = {props.date} onChange={dateChanged}   ref={dataRef} type="date" min='1995-06-16' max={formatDate(new Date())} />
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return ({
    date: state.todayPictureState.date,
  });
}

const mapDispatchToProps = (dispatch) => {
  return ({
    uploadPicture: (date) => { dispatch(uploadTodayPictureAction(date)) }
  })
}

const DateChooser = connect(mapStateToProps, mapDispatchToProps)(DateChooserAPI);

export default DateChooser;