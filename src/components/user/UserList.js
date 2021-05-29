import React, {useContext, useEffect} from 'react'
import { Button, Paper, Avatar, Tooltip, IconButton, Modal, TextField } from '@material-ui/core';
import { Delete, Close, Done } from '@material-ui/icons';


import User from './User'

import UserContext from '../../context/user/UserContext'


const UserList = () => {

  const { users, getUsers } = useContext(UserContext);

    return (
        <>
        <div className="users-list">
       
        {
          users.map((user) => (
            <User key={user.id} value={user}></User>
          ))
        }
        
        </div>
       
            
        </>
    )
}

export default UserList;