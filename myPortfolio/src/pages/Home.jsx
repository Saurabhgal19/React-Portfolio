import { ThemeToggle } from '../Components/ThemeToggle';
import StarBackground from '../Components/StarBackground';
import NavBar from '../Components/NavBar';
import HeroSection from '../Components/HeroSection';
import About from '../Components/About';
import Skills from '../Components/Skills';
//  import Projects from '../Components/Projects';
import ContactUs from '../Components/ContactUs';
import { Footer } from '../Components/Footer';


const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

      {/* Toggle Mode  (Dark/ White) */}
      <ThemeToggle/> 

      {/* Background Effects */}
      <StarBackground/>

      {/* Navbar */}
      <NavBar/>

      {/* Main Content */}
      <main>
        <HeroSection/>
        <About/>
        <Skills/>
        {/* <Projects/> */}
        <ContactUs/>
        
      </main>

      {/* Fotter */}
      <Footer/>
    </div>
  )
}

export default Home
