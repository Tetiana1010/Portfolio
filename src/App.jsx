import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import { Fragment, useEffect } from 'react';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import { IconButton, Switch } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import { useState } from 'react';


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
