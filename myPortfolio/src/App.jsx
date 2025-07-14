import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../src/pages/Home";
import NotFound from './pages/NotFound';
import { useEffect } from "react";
import About from "./Components/About";
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  
   useEffect(() => {
    AOS.init({
      duration: 800,      // animation duration in ms
      once: true,         // only animate once per element
      offset: 100,        // how early it should trigger
    });
  }, []);

  return (
    <>
    <BrowserRouter>
      <Routes>

        <Route index element={<Home/>}/>
        <Route path='*' element={<NotFound/>}/>
        <Route path="/about" element={<About/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
