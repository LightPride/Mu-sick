import placeholder from '../assets/backgrounds/event-text-card.webp';
import Icons from '../assets/svg/sprite.svg';
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
          <span className="navigation-label">[Our Team]</span>
          <div className="our-team_info-spacing">
            <div className="our-team_info-behind-the-scenes">
              <span className="our-team_info-behind-the-scenes_header">
                See some <br /> behind-the- <br /> scenes <br /> content on
              </span>
              <div className="four-team_info-behind-the-scenes-spacing">
                <a href="" className="our-team_info-behind-the-scenes_button">
                  <svg className="our-team_info-behind-the-scenes_link-svg">
                    <use
                      href={`${Icons}#instagram`}
                      width="24px"
                      height="24px"
                    ></use>
                  </svg>
                </a>
                <a href="" className="our-team_info-behind-the-scenes_button">
                  <svg className="our-team_info-behind-the-scenes_link-svg">
                    <use
                      href={`${Icons}#tiktok`}
                      width="24px"
                      height="24px"
                    ></use>
                  </svg>
                </a>
              </div>
            </div>
            <div className="our-team_info-text1">
              <span>
                We’re a team of six BFM students studying Crossmedia and doing
                our super hyper mega important semester project.
              </span>
              <span>
                We are from everywhere: Estonia, Ukraine, and Finland, and we
                bring together a mix of skills and vibes. We do everything from
                marketing to video production and coding (how do you think this
                website was made, huh?).
              </span>
            </div>
            <div className="our-team_info-text2">
              <span>
                We love music and we love weird unconventional stuff, so when it
                came to choosing a project idea - we knew this was gonna be it.
                And the way we manage to do quality work while having a brainrot
                level of humor needs to be studied. But hey, we do take our
                mission seriously.
              </span>
              <span>
                Come to our event and see for yourself. We’re here to change the
                game, and we’re just getting started.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
