// import placeholder from '../assets/backgrounds/event-text-card.webp';
import { NewsSlider } from './slider';
export const News = () => {
  return (
    <div className="news">
      <div className="container">
        <span id="news" className="navigation-label">
          [News]
        </span>
        <NewsSlider />
      </div>
    </div>
  );
};

//  <div className="slider-wrapper">
//    <div className="slider">
//      <div id="slide-1" className="slider_card">
//        <img src={placeholder} alt="First news image" className="slider_image" />
//      </div>
//      <div id="slide-2" className="slider_card">
//        <img
//          src={placeholder}
//          alt="Second news image"
//          className="slider_image"
//        />
//      </div>
//      <div id="slide-3" className="slider_card">
//        <img src={placeholder} alt="Third news image" className="slider_image" />
//      </div>
//    </div>
//    <div className="slider-nav">
//      <a href="#slide-1"></a>
//      <a href="#slide-2"></a>
//      <a href="#slide-3"></a>
//    </div>
//  </div>;
