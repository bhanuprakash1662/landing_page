
import './App.css';
import Navbar from "./components/Navbar"; // ✅ Correct (for default export)

import Hero from './components/Hero';
import About1 from './components/About1';
import Products from './components/Products';
import Careers from './components/Careers';
import Contact from './components/Contact';
import Footer from './components/Footer';



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <About1/>
      <Products/>
      <Careers/>
      <Contact/>
      <Footer/>
     
    </div>
  );
}

export default App;
