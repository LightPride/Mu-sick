export const EventComponent = () => {
  return (
    <section className="container section">
      <h3 id="pre-register" className="navigation-label">
        [event]
      </h3>

      <div className="event-block">
        <div className="event-cards_date-card">
          <span className="event-cards_date-card_slogan">
            Be part of the <br /> experiment - see <br /> our musicians live!
          </span>

          <div className="event-cards_date-card_container">
            <div className="event-cards_date-card_wrapper flex-column">
              <span className="event-cards_date-card_date">Date:</span>

              <span className="event-cards_date-card_date-text">
                16✱11✱2024
              </span>
            </div>

            <div className="event-cards_date-card_wrapper flex-column">
              <span className="event-cards_date-card_place">Place:</span>

              <span className="event-cards_date-card_place-text">
                Ükskõik Baar/Pikk tn 35, 10133 Tallinn
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
            extrovert out, raw emotions, community, and the best beats ever. We
            call it cozy chaos. You’ll feel the energy in your bones, and who
            knows? You might eave with a new favorite track.
          </p>
        </div>

        <form
          onSubmit={(evt) => {
            evt.preventDefault();
            console.log(evt);
          }}
          id="pre-register"
          className="event-register-form"
        >
          <div className="event-register-form_container">
            <h2 className="event-register-form_header">
              Wanna know smth cool?
            </h2>

            <p className="event-register-form_text">
              Pre-registering not only gets you in the door but also gives you a
              chance to win exclusive merch from our musicians. Fill out a short
              form and make sure to follow us on Instagram so you don’t miss the
              winner announcement!
            </p>

            <hr />

            <label className="event-register-form_input-label">
              <input
                className="event-register-form_input event-register-form_name"
                type="text"
                name="name"
                placeholder="NAME"
              />
            </label>

            <label className="event-register-form_input-label">
              <input
                className="event-register-form_input event-register-form_email"
                type="email"
                name="email"
                pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                title="Please enter a valid email address"
                placeholder="EMAIL"
              />
            </label>
          </div>

          <button
            className="event-register-form_button"
            type="submit"
            form="pre-register"
          >
            Pre-Register
          </button>
        </form>
      </div>
    </section>
  );
};
