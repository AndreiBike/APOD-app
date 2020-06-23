import React from 'react';
import { connect } from 'react-redux';
import Image from './Image/Image';
import './ImagesList.css';
import { uploadPictureAction } from '../Redux/actions';
import InfiniteScroll from 'react-infinite-scroll-component';

const generateKey = (pre) => {
  return `${ pre }_${new Date().getTime()}`
}

const ImagesListAPI = (props) => {

  const renderImage = (image) => {return <Image key = {generateKey(image.title)}  image= {image} />}
  let pictureList = props.pictures.map(renderImage); 

  return (
    <InfiniteScroll
      dataLength={props.pictures.length}
      next={() => props.uploadPicture({ date: props.lastDate })}
      hasMore={(props.lastDate !== '1995-06-16')}
      loading={'Loading'}
    >
      <div className = 'images-list'>
        {pictureList}
       </div>
    </InfiniteScroll>
  )
}

const mapStateToProps = (state) => {
  return ({
    isLoading: state.listPictureState.isLoading,
    pictures: state.listPictureState.pictures,
    lastDate: state.listPictureState.lastDate,
  })
}

const mapDispatchToProps = (dispatch) => {
  return ({
    uploadPicture: (data) => { dispatch(uploadPictureAction(data)) }
  })
}

const ImagesList = connect(mapStateToProps, mapDispatchToProps)(ImagesListAPI);

export default ImagesList;

