import placeholder from '../../assets/backgrounds/event-text-card.webp';
import Icons from '../../assets/svg/sprite.svg';

export const OurTeam = () => {
  return (
    <div className="our-team">
      <div className="container">
        <h2 className="our-team_header">
          Meet the Chaos
          <span id="our-team" className="our-team_header-accent">
            {' '}
            Gremlins
          </span>{' '}
          <br /> Behind This Project
        </h2>

        <div className="our-team_list">
          <div className="our-team_list-item">
            <img src={placeholder} alt="" className="our-team_list-image" />
          </div>

          <div className="our-team_list-item">
            <img src={placeholder} alt="" className="our-team_list-image" />
          </div>

          <div className="our-team_list-item">
            <img src={placeholder} alt="" className="our-team_list-image" />
          </div>

          <div className="our-team_list-item">
            <img src={placeholder} alt="" className="our-team_list-image" />
          </div>

          <div className="our-team_list-item">
            <img src={placeholder} alt="" className="our-team_list-image" />
          </div>

          <div className="our-team_list-item">
            <img src={placeholder} alt="" className="our-team_list-image" />
          </div>
        </div>

        <div className="our-team_info">
          <span className="navigation-label">{'[Our Team]'}</span>

          <div className="our-team_info-wrapper">
            <div className="our-team_info-upper-section">
              <span className="our-team_info-upper-section_header">
                See some <br /> behind-the- <br /> scenes <br /> content on
              </span>

              <ul className="our-team_info-section_text-list">
                <li className="our-team_info-section_text-item">
                  We’re a team of six BFM students studying Crossmedia and doing
                  our super hyper mega important semester project.
                </li>

                <li className="our-team_info-section_text-item">
                  We love music and we love weird unconventional stuff, so when
                  it came to choosing a project idea - we knew this was gonna be
                  it. And the way we manage to do quality work while having a
                  brainrot level of humor needs to be studied. But hey, we do
                  take our mission seriously.
                </li>
              </ul>
            </div>

            <div className="our-team_info-bottom-section">
              <div className="four-team_info-bottom-section-spacing">
                <a href="" className="our-team_info-bottom-section_button">
                  <svg className="our-team_info-bottom-section_link-svg">
                    <use
                      href={`${Icons}#instagram`}
                      width="24px"
                      height="24px"
                    ></use>
                  </svg>
                </a>

                <a href="" className="our-team_info-bottom-section_button">
                  <svg className="our-team_info-bottom-section_link-svg">
                    <use
                      href={`${Icons}#tiktok`}
                      width="24px"
                      height="24px"
                    ></use>
                  </svg>
                </a>
              </div>

              <ul className="our-team_info-section_text-list">
                <li className="our-team_info-section_text-item">
                  We are from everywhere: Estonia, Ukraine, and Finland, and we
                  bring together a mix of skills and vibes. We do everything
                  from marketing to video production and coding (how do you
                  think this website was made, huh?).
                </li>

                <li className="our-team_info-section_text-item">
                  Come to our event and see for yourself. We’re here to change
                  the game, and we’re just getting started.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
