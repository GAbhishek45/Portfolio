import "./app.scss"
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Parallax from './components/Parallex/Parallax';
import SmoothScroll from './components/SmoothScroll';
import Services from './components/Services/Services';
import Portfolio from './components/Portfolio/Portfolio';



const App = () => {
  return <div>
    <SmoothScroll>
    <section id="Homepage">
      <Navbar/>
      <Hero/>
    </section>
    <section id="Services"><Parallax type="services"/></section>
    <section><Services/>></section>
    <section id="Portfolio"><Parallax type="Portfolio"/></section>
    <Portfolio/>
    <section id="Contact">Contact</section>
    </SmoothScroll>
  </div>;
};

export default App;
