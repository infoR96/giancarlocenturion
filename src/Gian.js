import './App.css';
import React, { useState } from 'react';
import { Skills } from './components/about/Skills';
import { Present } from './components/about/Present';
import { ThemeProvider } from '@material-ui/styles';
import { Navbar } from './components/bases/gian/Navbar';
import { theme } from './temaConfig';
import { Hidden } from '@material-ui/core';
import { Cajon } from './components/bases/gian/Cajon';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom"
import {Work} from './components/work/Work';
import { Blog } from './components/Blog/Blog.js';
import { Contact } from './components/Contact/Contact';
export const Gian = () => {
  const [abrir, setAbrir] = useState(false)

  const mostrar = () => {
    setAbrir(!abrir)
  }
  
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Navbar mostrar={mostrar} />
        <Hidden mdUp>
          <Cajon variant='temporary'
            open={abrir}
            onClose={mostrar}
            mostrar={mostrar} />
        </Hidden>
        <Switch>
        <Route path="/" exact> 
        <div className="App d-block ">
          <Present />
            <Skills />
        </div>
        </Route>
        <Route path="/work"  >
          <Work/> 
        </Route>
        <Route path="/blog"  >
          <Blog/> 
        </Route>

        <Route path="/contact"  >
          <Contact/> 
        </Route>
        
        < Redirect to='/'/>
        </Switch>
      </ThemeProvider>
      </Router>
  );
}

