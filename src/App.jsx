import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Service from './pages/Service';
import About from './pages/About';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Contactus from './pages/Contactus';


const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <Router>
      <Navbar />

      <Routes>
      {/* <Route path="/" element={<Contactus/>} /> */}
        <Route path="/" element={<Home/>} />
        <Route path="/services" element={<Service />} />
        <Route path="/about" element={<About />} /> 
        <Route path="/contactus" element={<Contactus />} />
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;