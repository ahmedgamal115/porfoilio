import './App.css';
import Navbar from './component/Navbar'
import Banner from './component/Banner';
import Skills from './component/Skills/Skills';
import Projects from './component/Projects/Projects'
import Contact from './component/Contact/Contact';
import Footer from './component/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
