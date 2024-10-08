import { Home } from './components/home';
import { Header } from './components/header';
import { AboutEvent } from './components/about-event';
import { Hero } from './components/hero-block';
import { OurMusicians } from './components/our-musicians';
import { WorkWithUs } from './components/work-with-us';
import { OurTeam } from './components/our-team';
import { News } from './components/news';
import { Footer } from './components/footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
        {/* <AboutEvent />
        <Hero />
        <OurMusicians />
        <WorkWithUs />
        <News />
        <OurTeam /> */}
      </main>
      {/* <Footer /> */}
    </>
  );
}
export default App;
