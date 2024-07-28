import './App.css';
import Navbar from './Navbar';
import Aboutme from './components/Aboutme';
import Chart from './components/Chart';
import Contact from './components/Contact';
import Education from './components/Education';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
function App() {
  return (<>
  <div className='app-container'>
    <div className='navbar-div'>
      <Navbar/>
    </div>
    <section className='hero'>
      <Hero/>
    </section>
    <section className='skills'>
      <Skills/>
    </section>
    <section className='education'>
      <Education/>
    </section>
    <section className='aboutme'>
      <Aboutme/>
    </section>
    <section className='projects'>
      <Projects/>
    </section>
    <Chart/>
    <section className='contact'>
      <Contact/>
    </section>
  </div>
  </>
  );
}

export default App;
