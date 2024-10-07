import { NewsSlider } from './slider/slider';
export const News = () => {
  return (
    <div className="news">
      <div className="container">
        <span id="news" className="navigation-label">
          {'[News]'}
        </span>
        <NewsSlider />
      </div>
    </div>
  );
};
