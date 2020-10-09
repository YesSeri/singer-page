import React from 'react';
import Navbar from './components/Navbar'
import Home from './components/Home'
import Bio from './components/Bio'
import Contact from './components/Contact'
import Events from './components/Events'
import Media from './components/Media'
import Page404 from './components/Page404'
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components'
import './App.css';
const AppStyle = styled.div`
  text-align: center;
  margin: auto;
  max-width: 80vw;
  @media (max-width: 1440px) {
    max-width: 100vw;
  }
`

function App() {
  return (
    <AppStyle>
      <Navbar />
      <Switch>
        <Route exact component={Bio} path="/bio" />
        <Route exact component={Contact} path="/contact" />
        <Route exact component={Events} path="/events" />
        <Route exact component={Media} path="/media" />
        <Route exact component={Home} path="/" />
        <Route component={Page404} />
      </Switch>
    </AppStyle>
  );
}

export default App;
