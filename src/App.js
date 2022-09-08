import './App.css';
import Navbar from './component/Navbar'
import Banner from './component/Banner';
import Skills from './component/Skills/Skills';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Skills/>
    </div>
  );
}

export default App;
