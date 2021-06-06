//import { Button, Paper, Avatar, Tooltip, IconButton, Modal, TextField } from '@material-ui/core';
//import { Delete, Close, Done } from '@material-ui/icons';
import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch, 
  Route, 
  Link
} from 'react-router-dom';

import{ Button } from '@material-ui/core'

import UserState from './context/user/UserState';

import Header from './components/ui/Header';
import UserList from './components/user/UserList';
import UserCard from './components/user/UserCard';


function App() {
  return (
    <>
      {/*<UserState>*/}
        <Router>
          <Switch>
          <Route path="/" exact>
            <Link to="/users">
              <Button>Home</Button>
            </Link>
              
            </Route>

            <Route path="/users" exact>
              <Header></Header>
              <UserList></UserList>
            </Route>

            <Route path="/users/:id">
              <Link to="/users">
                <Button>Home</Button>
              </Link>
              <UserCard></UserCard>
            </Route>

          </Switch>
        </Router>
     {/* </UserState> */}
        
    </>
  );
}

export default App;
