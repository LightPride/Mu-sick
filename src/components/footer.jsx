import Icons from '../assets/svg/sprite.svg';

export const Footer = () => {
  return (
    <section className="footer">
      <div className="container">
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
            <ul className="footer-content__links-list">
              <li className="footer-content__links-item">
                <a href="#">
                  <svg className="footer-content__links-icon">
                    <use
                      href={`${Icons}#instagram`}
                      width="100%"
                      height="100%"
                    ></use>
                  </svg>
                </a>
              </li>

              <li className="footer-content__links-item">
                <a href="#">
                  <svg className="footer-content__links-icon">
                    <use
                      href={`${Icons}#tiktok`}
                      width="100%"
                      height="100%"
                    ></use>
                  </svg>
                </a>
              </li>

              <li className="footer-content__links-item">
                <a href="#">
                  <svg className="footer-content__links-icon">
                    <use
                      href={`${Icons}#spotify`}
                      width="100%"
                      height="100%"
                    ></use>
                  </svg>
                </a>
              </li>
            </ul>

            <span className="footer-content__links-date">✱2024</span>
          </div>
        </div>
      </div>
    </section>
  );
};
