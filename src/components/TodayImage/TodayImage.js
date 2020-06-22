import React from 'react';
import { connect } from 'react-redux';
import { uploadTodayPictureAction } from './../Redux/actions';
import { useEffect } from 'react';
import './TodayImage.css';
import Preloader from '../share/preloader/Preloader';

const TodayImageAPI = (props) => {

    const {
        isLoading,
        mediaType,
        todayPicture,
        date,
        uploadPicture,
        title,
    } = props;

    useEffect(() => {
        uploadPicture({ date: date })
    }, []);

    if(isLoading){
        return(
            <div className = "today-preloader">
                <Preloader />
            </div>
        )
    }

    if (mediaType === 'video') {
        return (
            <div className="today-video">
                <h1> {title} </h1>
                <iframe title={title} width="560" height="315" frameBorder="0" allowFullScreen  src='https://www.youtube.com/embed/Cd5a5KdPxQc?rel=0' >
                    Your browser doesn't allow iframes
                </iframe>
            </div>
        )
    }

    return (
        <div className="today-image">
            <img src={todayPicture} alt="today nasa" />
        </div>
    )
}

const mapStateToProps = (state) => {
    return ({
        isLoading: state.todayPictureState.isLoading,
        mediaType: state.todayPictureState.mediaType,
        todayPicture: state.todayPictureState.todayPicture,
        date: state.todayPictureState.date,
        title: state.todayPictureState.title,
    })
}

const mapDispatchToProps = (dispatch) => {
    return ({
        uploadPicture: (date) => { dispatch(uploadTodayPictureAction(date)) }
    })
}

let TodayImage = connect(mapStateToProps, mapDispatchToProps)(TodayImageAPI);

export default TodayImage;