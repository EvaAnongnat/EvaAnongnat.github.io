import React from 'react';

import './ImageTitle.css';

const ImageTitle = ({ imgSrc = './workoutio.png', title }) => {
 return (<div>
          <img className='art' src={imgSrc} alt="imageTitle" />
          <div className='sub-title'>{title}</div>
        </div>);
}

export default ImageTitle;