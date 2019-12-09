import React, { useState, useEffect } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const ImageLazyLoad = ({ ...props }) => {
  const [imageHeightState, setImageHeightState] = useState(400);
  const { src } = props.src;

  useEffect(() => {
    const imageElement = document.createElement('img');
    imageElement.src = src;
    const getImageHeight = setInterval(function() {
      if (imageElement.naturalHeight) {
        clearInterval(getImageHeight);
        setImageHeightState(imageElement.naturalHeight);
      }
    }, 10);
    return () => {
      clearInterval(getImageHeight);
    };
  }, [src]);

  return (
    <LazyLoadImage
      className="d-block w-100"
      height={imageHeightState}
      {...props}
    />
  );
};

export default ImageLazyLoad;
