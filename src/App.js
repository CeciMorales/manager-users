//import { Button, Paper, Avatar, Tooltip, IconButton, Modal, TextField } from '@material-ui/core';
//import { Delete, Close, Done } from '@material-ui/icons';
import './App.css';

import UserState from './context/user/UserState';

import UserList from './components/user/UserList';
import Header from './components/ui/Header';


function App() {
  return (
    <>
      <UserState>
        <Header></Header>
        <UserList></UserList>
      </UserState>
    </>
  );
}

export default App;
