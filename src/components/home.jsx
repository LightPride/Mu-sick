import musick from '../assets/styled-words/mu-sick.webp';
import arrow from '../assets/arrow.webp';
export const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <div className="home_cta">
          <span className="home_cta-text">
            This isn’t just music it’s a fucking revolution. Are you ready?
          </span>
          <button className="home_cta-button">
            <span className="home_cta-button-text">Pre-register</span>
          </button>
        </div>
        <div className="home_middle-block">
          <img className="home_middle-block-image" src={musick} alt="mu-sick" />
          <div className="home_middle-block-text-wrapper">
            <span className="home_middle-block-text1">
              Welcome to the community where your music taste won’t make you an
              outsider. This is a space for musicians who dare to be different
              and for listeners who crave something real. If you’re sick of the
              same old radio-appropriate beats, you’re in the right place.
            </span>
            <span className="home_middle-block-text2">
              We’re bringing the experimental stuff. The alternative stuff. The
              underground stuff.
            </span>
            <img className="home_middle-block-arrow" src={arrow} alt="arrow" />
          </div>
        </div>
      </div>
    </div>
  );
};
