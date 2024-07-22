import { useState } from 'react';
import './App.css';
import { ThemeContext } from './Contexts';
import Navbar from './components/Navbar/Navbar';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  return (
    <ThemeContext.Provider value={theme}>
      <Navbar toggleTheme={toggleTheme} />
    </ThemeContext.Provider>
  )
}

export default App
