import { useState, useEffect, useCallback } from 'react';
import Icons from '../../assets/svg/sprite.svg';

const navItems = [
  { href: '#home', text: 'Home' },
  { href: '#about-event', text: 'About & Event' },
  { href: '#our-musicians', text: 'Our musicians' },
  { href: '#news', text: 'News' },
  { href: '#our-team', text: 'Our team' },
];

export const Header = () => {
  const [visible, setVisible] = useState(true);

  const handleScroll = useCallback(() => {
    const currentScrollPosition = document.documentElement.scrollTop;

    if (currentScrollPosition > 0) {
      setVisible(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <>
      <header
        className={`header ${visible ? 'header__visible' : 'header__hidden'}`}
      >
        <div className="container">
          <a>
            <svg className="header-logo">
              <use href={`${Icons}#logo`} width="100%" height="100%"></use>
            </svg>
          </a>

          <nav className="nav-bar">
            <ul className="header-nav__list">
              {navItems.map((item, index) => (
                <li className="header-nav__item" key={index}>
                  <a href={item.href} className="header-nav__link">
                    <span className="header-nav__bracket">{'[ '}</span>
                    <span className="header-nav__bracket">{'] '}</span>
                    <span className="header-nav__text">{item.text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <ul className="header-social__list">
            <li className="header-social__item">
              <a href="https://www.instagram.com/musick.project" target="blank">
                <svg className="header-social__icon">
                  <use
                    href={`${Icons}#instagram`}
                    width="100%"
                    height="100%"
                  ></use>
                </svg>
              </a>
            </li>
            <li className="header-social__item">
              <a href="https://www.tiktok.com/@musick.project" target="blank">
                <svg className="header-social__icon">
                  <use
                    href={`${Icons}#tiktok`}
                    width="100%"
                    height="100%"
                  ></use>
                </svg>
              </a>
            </li>
          </ul>
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
