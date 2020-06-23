import React from 'react';
import './Image.css';

const Image = (props) => {
  return (
    <div className="image">
      <img src={props.image.todayPicture} alt="no pic" />
      <div>
        {props.image.date}
      </div>
    </div>

  )
}

export default Image;