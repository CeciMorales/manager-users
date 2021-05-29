import React, { useContext} from 'react'
import { Button} from '@material-ui/core';

import UserContext from '../../context/user/UserContext'

import UserModal from '../user/UserModal';

const Header = () => {

    const { users } = useContext(UserContext);
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
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