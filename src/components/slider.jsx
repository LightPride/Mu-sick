import placeholder from '../assets/backgrounds/event-text-card.webp';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const newsData = [
  {
    name: 'NM ✱ Barramundi',
    image: placeholder,
    link: `https://open.spotify.com/artist/1Ki9n7WV9D8rwLQoWUgdjS?si=AZ-Ui8-eTru2PsYfBEMzPA`,
    text: ``,
  },
  {
    name: 'Dyvour ✱',
    image: placeholder,
    link: `https://open.spotify.com/artist/4s8QBLbKQfVyxBBFKici0O?si=swYiWnOAT4aUf8d_GBo1Xw`,
    text: ``,
  },
  {
    name: 'Kristjan ✱ Glück',
    image: placeholder,
    link: `https://open.spotify.com/artist/4wlGofpoCx983N0ts4JOMi?si=0Emh9umAT-mw_q44PshLRw`,
    text: ``,
  },
];

export const NewsSlider = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToscroll: 1,
  };
  return (
    <div className="slider-wrapper">
      <Slider {...settings}>
        {newsData.map((item) => (
          <div key={item.name} className="slider_card">
            <div className="slider_image"></div>
            <div>123</div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

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
