import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';

import bgVideo from '../src/assets/earth-bg.mp4';

function App() {
  return (
    <div>
      <div className='h-[700px] relative'>
        <video autoPlay muted loop className='fixed right-0 top-0 h-[700px] w-full
          object-cover z-[-1]'>
          <source src={bgVideo} type="video/mp4" />
        </video>
        <Navbar />
        <Hero />
      </div>

      <Services />
    </div>
  );
}

export default App;
