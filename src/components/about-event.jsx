import welcomeToTheChaos from '../assets/styled-words/welcome-to-the-chaos.webp';

export const AboutEvent = () => {
  return (
    <div className="about-event">
      <div className="container">
        <div className="container-about-spacing">
          <span id="about-event" className="navigation-label">
            {'[about]'}
          </span>
          <div className="about-block-text">
            <img
              className="about_image"
              src={welcomeToTheChaos}
              alt="welcome"
            />
            <span className="about_text1">
              We know how long you’ve been craving authenticity, and we are here
              to bring raw, experimental beats straight to your ears. We’re not
              just another music project; we’re a goddamn revolution in the
              underground music scene.
            </span>
            <span className="about_text2">
              We are a complex multi-platform project, and right now you are
              exploring one of our platforms. Our Instagram and TikTok should be
              next on your list, followed by our documentary that’s coming out
              very soon. But what kind of music project would we be if we didn’t
              have a proper gig?
            </span>
          </div>
        </div>
        <hr id="pre-register" className="line" />
        <div className="container-event-spacing">
          <span id="pre-register" className="navigation-label">
            [event]
          </span>
          <div className="event-block">
            <div className="event-cards">
              <div className="event-cards_date-card">
                <span className="event-cards_date-card_slogan">
                  Be part of the <br /> experiment - see <br /> our musicians
                  live!
                </span>
                <div className="event-cards_date-card_container">
                  <div className="flex-column">
                    <span className="event-cards_date-card_date">Date:</span>
                    <span className="event-cards_date-card_date-text">
                      27✱09✱2024
                    </span>
                  </div>
                  <div className="flex-column">
                    <span className="event-cards_date-card_place">Place:</span>
                    <span className="event-cards_date-card_place-text">
                      Viru väljak 4, 10111 Tallinn, Eesti
                    </span>
                  </div>
                </div>
              </div>
              <div className="event-cards_info-card">
                <h2 className="event-cards_info-card_header">
                  About <br /> Event
                </h2>
                <p className="event-cards_info-card_text">
                  We’re bringing all four of our musicians to the stage for an
                  unforgettable night. We promise super chill yet chaotic vibes,
                  quality music, a bar with drinks to help you get your inner
                  extrovert out, raw emotions, community, and the best beats
                  ever. We call it cozy chaos. You’ll feel the energy in your
                  bones, and who knows? You might eave with a new favorite
                  track.
                </p>
              </div>
            </div>
            <div className="event-register-form-container">
              <h2 className="event-register-form_header">
                Wanna know smth cool?
              </h2>
              <p className="event-register-form_text">
                Pre-registering not only gets you in the door but also gives you
                a chance to win exclusive merch from our musicians. Fill out a
                short form and make sure to follow us on Instagram so you don’t
                miss the winner announcement!
              </p>
              <hr />
              <form
                onSubmit={(evt) => {
                  evt.preventDefault();
                  console.log(evt);
                }}
                id="pre-register"
                className="event-register-form"
              >
                <label className="event-register-form_input-label">
                  <input
                    className="event-register-form_input"
                    type="text"
                    name="name"
                    placeholder="NAME"
                  />
                </label>
                <label className="event-register-form_input-label">
                  <input
                    className="event-register-form_input"
                    type="email"
                    name="email"
                    pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                    title="Please enter a valid email address"
                    placeholder="EMAIL"
                  />
                </label>
              </form>
            </div>
            <button
              className="event-register-form_button"
              type="submit"
              form="pre-register"
            >
              Pre-Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
