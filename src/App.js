import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { AuthProvider } from './auth/AuthContext';
import Dashboard from './components/dashboard/dashboard';
import HotBar from './components/hotbar/hotbar';
import LoginFrontpage from './components/login/loginfront'
import ProductPage from './components/products/ProductPage';
import styled from "styled-components";


const CONTAINER = styled.div`

max-width: 1080px;
margin: 0 auto;

`

function App() {
  return (
    <CONTAINER>
    <AuthProvider>
      <Router>
        <HotBar/>

        <Switch>
          <Route exact path='/'>
            <LoginFrontpage></LoginFrontpage>
          </Route>

          <Route path='/dashboard'>
            <Dashboard/>
          </Route>

          <Route path='/productpage'>
            <ProductPage/>
          </Route>

        </Switch>
      </Router>
      </AuthProvider>
    </CONTAINER>
  );
}

export default App;
