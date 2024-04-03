 
import  Navbar  from  './components/Navbar'
import './App.css';
import Hero from './components/Hero';
import Trust from './components/Trust';
import About from './components/About';
import Service from './components/Service';
import Seo from './components/Seo';
import Developer from './components/Developer';
import Work from './components/Work';
 
import SliderCard from './components/SliderCard';
import Blog from './components/Blog';
import Footer from './components/Footer';
 
function App() {
  return (
    <div className="App">
      
      <Navbar />
      <Hero />
      <Trust />
      <About />
      <Service />
      <Seo />
      <Developer />
        <Work />
         <SliderCard />
         <Blog />
         <Footer />
    </div>
  );
}

export default App;
