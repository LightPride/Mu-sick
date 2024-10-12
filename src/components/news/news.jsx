import { NewsSlider } from './slider/slider';
import shape6 from '../../assets/shapes/6.webp';
import shape7 from '../../assets/shapes/7.webp';
export const News = () => {
  return (
    <div className="news">
      <img className="news-shape6" src={shape6} />
      <img className="news-shape7" src={shape7} />
      <div className="container">
        <span id="news" className="navigation-label">
          {'[News]'}
        </span>
        <NewsSlider />
      </div>
    </div>
  );
};
