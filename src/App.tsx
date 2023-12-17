import logo from './logo.svg';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/ContactMe';
import './styles/global.css';
import Experience from './pages/Experience';

function App() {
  return (
    <div className="App">
      <div className="grid grid-cols-1 bg-gradient-to-r from-indigo-500">
        <Home></Home>
        <Experience></Experience>
        <Projects></Projects>
        <Skills></Skills>
        <Contact></Contact>
      </div>
    </div>
  );
}

export default App;
