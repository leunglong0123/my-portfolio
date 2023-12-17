import logo from './logo.svg';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/ContactMe';
import './styles/global.css';

function App() {
  return (
    <div className="App">
      <div className="grid grid-cols-1 gap-4">
        <Home></Home>
        <Projects></Projects>
        <Skills></Skills>
        <Contact></Contact>
      </div>
    </div>
  );
}

export default App;
