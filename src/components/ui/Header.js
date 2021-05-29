import React, { useContext, useState } from 'react'
import { Button, Paper, Avatar, Tooltip, IconButton, Modal, TextField } from '@material-ui/core';
import { Delete, Close, Done } from '@material-ui/icons';

import UserContext from '../../context/user/UserContext'

import UserModal from '../user/UserModal';

const Header = () => {

    const { users } = useContext(UserContext);
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        console.log('abrir modal');
        setOpen(true);
        console.log(open)
      };
    
      const handleClose = () => {
        setOpen(false);
      };

    return (
        <>
            <div className="app-header">        
                <h1>User Manager ({users.length})</h1>
                <Button variant="contained" color="primary" onClick={handleClickOpen}>Agregar</Button>
                <UserModal open={open} onClose={handleClose}></UserModal>
            </div>
        </>
    )
}

export default Header;