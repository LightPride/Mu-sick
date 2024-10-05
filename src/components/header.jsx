import { useState, useEffect } from 'react';
import Icons from '../assets/svg/sprite.svg';

export const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPosition =
      window.pageYOffset || document.documentElement.scrollTop;

    if (currentScrollPosition > scrollPosition) {
      setVisible(false);
    }

    setScrollPosition(currentScrollPosition);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollPosition]);

  return (
    <>
      <header
        id="header"
        className={`header ${visible ? 'header__visible' : 'header__hidden'}`}
      >
        <div className="container">
          <div className="header-wrapper">
            <a href="#header">
              <svg className="header-logo">
                <use href={`${Icons}#logo`} width="100%" height="100%"></use>
              </svg>
            </a>

            <ul className="header-nav__list">
              <li className="header-nav__item">
                <a href="#" className="header-nav__link">
                  <span className="header-nav__bracket">{'[ '}</span>
                  <span className="header-nav__bracket">{'] '}</span>Home
                </a>
              </li>

              <li className="header-nav__item">
                <a href="#" className="header-nav__link">
                  {'[ ]'} About & Event
                </a>
              </li>

              <li className="header-nav__item">
                <a href="#" className="header-nav__link">
                  {'[ ]'} Our musicians
                </a>
              </li>

              <li className="header-nav__item">
                <a href="#" className="header-nav__link">
                  {'[ ]'} News
                </a>
              </li>

              <li className="header-nav__item">
                <a href="#" className="header-nav__link">
                  {'[ ]'} Our team
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
        {'>'}
      </button>
    </>
  );
};
