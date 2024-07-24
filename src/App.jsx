import { useState } from 'react';
import './App.css';
import { ThemeContext } from './Contexts';
import Navbar from './components/ControlBars/Navbar/Navbar';
import Toolbar from './components/ControlBars/Toolbar/Toolbar';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  return (
    <ThemeContext.Provider value={theme}>
      <Navbar toggleTheme={toggleTheme} />
      <Toolbar />
    </ThemeContext.Provider>
  )
}

export default App
