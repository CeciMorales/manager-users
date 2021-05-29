import React, {useEffect} from 'react'
import { Button, Paper, Avatar, Tooltip, IconButton, Modal, TextField } from '@material-ui/core';
import { Delete, Close, Done } from '@material-ui/icons';

import UserActions from './UserActions'

const User = (props) => {

  const user = props.value


    return (
        <>
        <Paper className="user-row" elevation={3}>
          <div className="left-side">
            <Avatar 
              src={user.image}
              style={ user.isActive ? { border: '5px solid #3CB371' } : { border: '5px solid #FF6347' } }
              >
              
            </Avatar>
            <div className="user-name-container">
              <span className="user-name">{ user.firstName }</span>
              <span className="user-lastname"> { user.lastName } </span>
              <span className="user-email"> ({ user.email }) </span>
            </div>
          </div>
          <UserActions value={user}></UserActions>
          
        </Paper>
        
        </>
    )
}

export default User;

// MuiAvatar-root MuiAvatar-circle