import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Banner from './components/Banner';
import BannerR from './components/BannerR';

import Footer from './components/Footer';
import bgVideo from '../src/assets/earth-bg.mp4';

function App() {
  return (
    <div>
      <div className='h-[100vh] relative'>
        <video autoPlay muted loop className='fixed right-0 top-0 h-[100vh] w-full
          object-cover z-[-1]'>
          <source src={bgVideo} type="video/mp4" />
        </video>
        <Navbar />
        <Hero />
      </div>

      <Services />
      <Banner />
      <BannerR />
      <Footer />
    </div>
  );
}

export default App;
