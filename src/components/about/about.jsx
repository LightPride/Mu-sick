import welcomeToTheChaos from '../../assets/styled-words/welcome-to-the-chaos.webp';

export const About = () => {
  return (
    <div className="container about">
      <span id="about-event" className="navigation-label">
        {'[about]'}
      </span>
      <div className="about-block-text">
        <img
          className="autoShow about_image autoShowByScroll"
          src={welcomeToTheChaos}
          alt="welcome"
        />
        <span className="about_text1">
          We know how long you’ve been craving authenticity, and we are here to
          bring raw, experimental beats straight to your ears. We’re not just
          another music project; we’re a goddamn revolution in the underground
          music scene.
        </span>
        <span className="about_text2">
          We are a complex multi-platform project, and right now you are
          exploring one of our platforms. Our Instagram and TikTok should be
          next on your list, followed by our documentary that’s coming out very
          soon. But what kind of music project would we be if we didn’t have a
          proper gig?
        </span>
      </div>
      <hr id="pre-register" className="line" />
    </div>
  );
};
