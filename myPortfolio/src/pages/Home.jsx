import { ThemeToggle } from '../Components/ThemeToggle';
import StarBackground from '../Components/StarBackground';
import NavBar from '../Components/NavBar';


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


      {/* Fotter */}

    </div>
  )
}

export default Home
