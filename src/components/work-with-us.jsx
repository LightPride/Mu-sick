import Icons from '../assets/svg/sprite.svg';

export const WorkWithUs = () => {
  return (
    <section className="workWithUs">
      <div className="container">
        <div className="workWithUs-titles__wrapper">
          <h3 className="workWithUs-subTitle">{'[work with us]'}</h3>

          <h2 className="workWithUs-title">
            <span className="workWithUs-title__span">got {'[beats]'}?</span> we
            want you! hit us up and join the squad!
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
