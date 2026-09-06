import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import personalPhoto from "./assets/personalPhoto.jpeg"
import { TechTicker } from './components/TechTicker';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Services } from './components/Services';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { testimonialsData } from './data/testimonialsData';
import { Testimonials } from './components/Testimonials';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Hero
          title="JUNIOR REACT FRONT-END DEVELOPER"
          headline="I turn ideas into responsive digital experiences."
          description="I help small startups turn their ideas and Figma designs into clean, responsive React websites with clear communication and attention to every UI detail."
          imgSrc={personalPhoto}
          imgAlt="TaskMaster UI Dashboard preview"
        />
<TechTicker/>
<About/>
<TechTicker/>
<Skills/>
<TechTicker/>
<Services/>
<TechTicker/>
        <Projects />
        <TechTicker/>
<Education/>
        <TechTicker/>

<Testimonials testimonials={testimonialsData} />
        <TechTicker/>

<Contact/>
<Footer/>
      </main>
    </div>
  );
}

export default App;