import { useEffect, useRef } from 'react';
import Icons from '../assets/svg/sprite.svg';
import Typed from 'typed.js';

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
    <section className="workWithUs">
      <div className="container">
        <div className="workWithUs-titles__wrapper">
          <h3 className="navigation-label">{'[work with us]'}</h3>

          <h2 className="workWithUs-title">
            <span className="workWithUs-title__span">got {'[beats]'}?</span>
            <span ref={el} />
          </h2>
        </div>

        <button className="workWithUs-btn">
          contact us
          <svg className="workWithUs-icon">
            <use href={`${Icons}#contact`} width="100%" height="100%"></use>
          </svg>
        </button>
      </div>
    </section>
  );
};
