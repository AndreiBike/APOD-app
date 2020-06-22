import React from 'react';
import preloadImage from './preloader.svg';


let Preloader = (props) => {
    return (
        <div className = 'preloader-style'>
            <img src ={preloadImage} alt = 'preloading...'/>
        </div>
    )
}

export default Preloader;

