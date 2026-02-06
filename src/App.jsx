import { useState } from 'react';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import { Fragment, useEffect } from 'react';
import { IconButton, Switch } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Brightness4Icon from '@mui/icons-material/Brightness4';


function App() {
  const [theme, setTheme] = useState('dark-theme');
  const [checked, setChecked] = useState(false);
  const [navToggle, setNavToggle] = useState(false);

  useEffect(()=>{
    document.documentElement.className = theme;
  }, [theme]);

  const themeToggler = () =>{
    if(theme === 'light-theme'){
      setTheme('dark-theme');
      setChecked(false)
    } else{
      setTheme('light-theme');
      setChecked(true)
    }
  }

  return <Fragment>
    <div className="App">

    <Sidebar navToggle={navToggle} />
    <div className="theme">
      <div className="light-dark-mode">
          <div className="left-content">
            <Brightness4Icon />
          </div>
          <div className="right-content">
            <Switch
              value=""
              checked={checked}
              inputProps={{ 'aria-label': '' }}
              size="medium"
              onClick={themeToggler}  
            />
          </div>
        </div>
    </div>

    <div className="ham-burger-menu">
      <IconButton onClick={() => setNavToggle(!navToggle)}>
          <MenuIcon />
      </IconButton>
    </div>

        <div className="ham-burger-menu">
          <IconButton onClick={() => setNavToggle(!navToggle)}>
            <MenuIcon />
          </IconButton>
        </div>
      <MainContent/>
    </div>
  </Fragment>
};


export default App;
