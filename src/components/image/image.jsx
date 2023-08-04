import { useState } from 'react';
import Wait from '../wait/wait';
import './image.css';

const Image = ({ src, alt, width }) => {
  const [loaded, setLoaded] = useState(false);

  const handleLoadImage = () => {
    setLoaded(true);
  };

// style="display: block; background: red;"
// style={{display: "block", background: "red"}}

  return (
    <>
      <img src={src} alt={alt} width={width} onLoad={handleLoadImage} style={{display: loaded ? "block" : "none"}}/>
      <div style={{ width, height: width, display: !loaded ? "flex" : "none" }} className="image-wait-container">
        <Wait />
      </div>
    </>
  );
};

export default Image;
