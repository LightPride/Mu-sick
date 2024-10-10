import Icons from '../../assets/svg/sprite.svg';
// import './footer.css';

export const Footer = () => {
  return (
    <section className="footer container">
      <div className="footer-title__wrapper">
        <h2 className="footer-title">
          <span className="footer-title__span">©</span>MÜ-SICK
        </h2>
      </div>

      <div className="footer-content">
        <div className="footer-content__title-wrapper">
          <h3 className="footer-content__title">Welcome to the Chaos</h3>
        </div>

        <div className="footer-content__links">
          <div className="footer-content__links-list">
            <a href="https://www.instagram.com/musick.project" target="blank">
              <svg className="footer-content__links-icon">
                <use
                  href={`${Icons}#instagram`}
                  width="100%"
                  height="100%"
                ></use>
              </svg>
            </a>

            <a href="https://www.tiktok.com/@musick.project" target="blank">
              <svg className="footer-content__links-icon">
                <use href={`${Icons}#tiktok`} width="100%" height="100%"></use>
              </svg>
            </a>

            <a
              href="https://open.spotify.com/playlist/4g4XawS5tTHpPTGFHkEEGY?si=ANYIXh9mROSLF9fB-cRwLg&pi=e-5M3ULAeYRNiP"
              target="blank"
            >
              <svg className="footer-content__links-icon">
                <use href={`${Icons}#spotify`} width="100%" height="100%"></use>
              </svg>
            </a>
          </div>

          <span className="footer-content__links-date">✱2024</span>
        </div>
      </div>
    </section>
  );
};
