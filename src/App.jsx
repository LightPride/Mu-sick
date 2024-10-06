import { Home } from './components/home';
import { Header } from './components/header';
import { AboutEvent } from './components/about-event';
import { Hero } from './components/hero-block';
import { OurMusicians } from './components/our-musicians';
import { WorkWithUs } from './components/work-with-us';

function App() {
  return (
    <main>
      <Header />
      <Home />
      <AboutEvent />
      <Hero />
      <OurMusicians />
      <WorkWithUs />
    </main>
  );
}
export default App;
