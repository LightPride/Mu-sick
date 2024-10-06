import { useState, useEffect, useCallback } from 'react';
import Icons from '../assets/svg/sprite.svg';

export const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = useCallback(() => {
    const currentScrollPosition =
      window.pageYOffset || document.documentElement.scrollTop;

    if (currentScrollPosition > scrollPosition) {
      setVisible(false);
    }

    setScrollPosition(currentScrollPosition);
  }, [scrollPosition]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <>
      <header
        id="header"
        className={`header ${visible ? 'header__visible' : 'header__hidden'}`}
      >
        <div className="container">
          <div className="header-wrapper">
            <a>
              <svg className="header-logo">
                <use href={`${Icons}#logo`} width="100%" height="100%"></use>
              </svg>
            </a>

            <ul className="header-nav__list">
              <li className="header-nav__item">
                <a href="#home" className="header-nav__link">
                  <span className="header-nav__bracket">{'[ '}</span>
                  <span className="header-nav__bracket">{'] '}</span>
                  <span className="header-nav__text">Home</span>
                </a>
              </li>

              <li className="header-nav__item">
                <a href="#about-event" className="header-nav__link">
                  <span className="header-nav__bracket">{'[ '}</span>
                  <span className="header-nav__bracket">{'] '}</span>
                  <span className="header-nav__text">About & Event</span>
                </a>
              </li>

              <li className="header-nav__item">
                <a href="#our-musicians" className="header-nav__link">
                  <span className="header-nav__bracket">{'[ '}</span>
                  <span className="header-nav__bracket">{'] '}</span>
                  <span className="header-nav__text">Our musicians</span>
                </a>
              </li>

              <li className="header-nav__item">
                <a href="#" className="header-nav__link">
                  <span className="header-nav__bracket">{'[ '}</span>
                  <span className="header-nav__bracket">{'] '}</span>
                  <span className="header-nav__text">News</span>
                </a>
              </li>

              <li className="header-nav__item">
                <a href="#" className="header-nav__link">
                  <span className="header-nav__bracket">{'[ '}</span>
                  <span className="header-nav__bracket">{'] '}</span>
                  <span className="header-nav__text">Our team</span>
                </a>
              </li>
            </ul>

            <ul className="header-social__list">
              <li className="header-social__item">
                <a href="#">
                  <svg className="header-social__icon">
                    <use
                      href={`${Icons}#tiktok`}
                      width="100%"
                      height="100%"
                    ></use>
                  </svg>
                </a>
              </li>

              <li className="header-social__item">
                <a href="#">
                  <svg className="header-social__icon">
                    <use
                      href={`${Icons}#instagram`}
                      width="100%"
                      height="100%"
                    ></use>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>

      <button
        className={`header-btn ${
          visible ? 'header-btn__hidden' : 'header-btn__visible'
        }`}
        onClick={() => setVisible(true)}
      >
        V
      </button>
    </>
  );
};
