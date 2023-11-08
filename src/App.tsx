import React from 'react';
import logo from './logo.svg';
import NavBar from './components/Navbar';
import './App.css';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/ContactMe';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Home></Home>
        <Projects></Projects>
        <Skills></Skills>
        <Contact></Contact>
      </header>
    </div>
  );
}

export default App;
