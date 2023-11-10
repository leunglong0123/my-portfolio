import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/ContactMe';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="grid grid-cols-1 gap-4">
          <Home></Home>
          <Projects></Projects>
          <Skills></Skills>
          <Contact></Contact>
        </div>
      </header>
    </div>
  );
}

export default App;
