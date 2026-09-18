import { Navbar } from './components/navbar/navbar';
import { Hero } from './components/hero/hero';
import { About } from './components/about/about';
import { Experience } from './components/experience/experience';
import { Projects } from './components/projects/projects';
import { Stack } from './components/stack/stack';
import { Contact } from './components/contact/contact';

import './App.css';

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <About />

        <Experience />

        <Projects />

        <Stack />

        <Contact />
      </main>
    </>
  );
}

export default App;