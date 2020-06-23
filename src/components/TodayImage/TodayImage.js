import React from 'react';
import { connect } from 'react-redux';
import { uploadTodayPictureAction } from './../Redux/actions';
import './TodayImage.css';
import Preloader from '../share/preloader/Preloader';


class TodayImageAPI extends React.Component {

    constructor(props){
        super(props);
        console.log(props);
    }

    componentDidMount(){
        this.props.uploadPicture({ date: this.props.date })
    }

    render(){

        if(this.props.isLoading){
            return(
                <div className = "today-preloader">
                    <Preloader />
                </div>
            )
        }
    
        if (this.props.mediaType === 'video') {
            return (
                <div className="today-video">
                    <h1> {this.props.title} </h1>
                    <iframe title={this.props.title} width="560" height="315" frameBorder="0" allowFullScreen  src='https://www.youtube.com/embed/Cd5a5KdPxQc?rel=0' >
                        Your browser doesn't allow iframes
                    </iframe>
                </div>
            )
        }
    
        return (
            <div className="today-image">
                <img src={this.props.todayPicture} alt="today nasa" />
            </div>
        )
    }

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