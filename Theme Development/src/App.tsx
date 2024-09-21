
import './Styles/main.scss';
import { useState } from 'react';

function App() {
  const [theme, setTheme] = useState('theme-light');

  const toggleTheme = () => {
    setTheme(theme === 'theme-light' ? 'theme-dark' : 'theme-light');
  };

  return (
    <div className={theme}>
      <button onClick={toggleTheme}>
        Toggle Theme
      </button>
      <p>Hello, this is your themed web app!</p>
    </div>
  );
}

export default App;

