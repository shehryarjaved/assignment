import React from 'react';
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const Slideshow = () => {
  const images = [
    'https://k.nooncdn.com/cms/pages/20210608/337dde6cb9efeb095d41179b9c04c4d1/en_slider-01.png',
    'https://k.nooncdn.com/cms/pages/20210607/87c6b70c26ff90ae30bdf6580a38aa39/en_banner-01.gif',
    'https://k.nooncdn.com/cms/pages/20201020/79a2e38e27583a1a5db92d21097f3b8e/en_slider-emaar-uae-emaar.png'
  ];

  const zoomInProperties = {
    indicators: true,
    scale: 1.4
  }
  return (
    <div>
      <Zoom {...zoomInProperties}>
        {images.map((each, index) => (
          <div key={index} style={{width: "100%"}}>
            <img style={{ objectFit: "cover", width: "85%" }} src={each} />
          </div>
        ))}
      </Zoom>
    </div>
  )
}

export default Slideshow;