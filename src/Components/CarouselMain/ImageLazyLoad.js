import React, { useState, useEffect } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const ImageLazyLoad = ({ ...props }) => {
  const [imageHeightState, setImageHeightState] = useState(400);
  const imageElement = document.createElement('img');
  imageElement.src = props.src;
  const getImageHeight = setInterval(function() {
    if (imageElement.naturalHeight) {
      clearInterval(getImageHeight);
      setImageHeightState(imageElement.naturalHeight);
    }
  }, 10);

  return (
    <LazyLoadImage
      className="d-block w-100"
      height={imageHeightState}
      {...props}
    />
  );
};

export default ImageLazyLoad;
