import { Home } from './components/home';
import { Header } from './components/header';
import { About } from './components/about';
import { Hero } from './components/hero-block';
import { OurMusicians } from './components/our-musicians';
import { WorkWithUs } from './components/work-with-us';
import { OurTeam } from './components/our-team';
import { News } from './components/news';
import { Footer } from './components/footer';
import { EventComponent } from './components/event/event';
import { useEffect, useState } from 'react';
import { Loader } from './components/loader';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      const content = document.querySelector('.content-container');
      content.classList.add('show');
    }
  }, [isLoading]);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="content-container">
          <Header />
          <main>
            <Home />
            <About />
            <EventComponent />
            <Hero />
            <OurMusicians />
            <WorkWithUs />
            <News />
            <OurTeam />
          </main>
          <Footer />
        </div>
      )}
    </>
  );
}
export default App;
