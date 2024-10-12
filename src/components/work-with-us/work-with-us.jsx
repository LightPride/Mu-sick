import { useEffect, useRef } from 'react';
import Icons from '../../assets/svg/sprite.svg';
import Typed from 'typed.js';
import rotatingShape from '../../assets/shapes/5.webp';

export const WorkWithUs = () => {
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['we want you! hit us up and join the squad!'],
      typeSpeed: 30,
      loop: true,
      backDelay: 5000,
      backSpeed: 20,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="workWithUs container">
      <img
        src={rotatingShape}
        className="work-with-us-shape5 auto-rotate"
      ></img>
      <span className="navigation-label">{'[work with us]'}</span>
      <div className="workWithUs-titles__wrapper">
        <h2 className="transitionLeft workWithUs-title">
          <span className="workWithUs-title__span">got {'[beats]'}?</span>
          <span ref={el} />
        </h2>
      </div>

      <a
        href="https://linktr.ee/musick.project"
        target="blank"
        className="workWithUs-btn"
      >
        contact us
        <svg className="workWithUs-icon">
          <use href={`${Icons}#contact`} width="100%" height="100%"></use>
        </svg>
      </a>
    </section>
  );
};
