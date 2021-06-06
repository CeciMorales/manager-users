import React, { useContext} from 'react'
import { Button} from '@material-ui/core';

// ! cosas de redux
import { useSelector, useDispatch } from 'react-redux';

// * context
import UserContext from '../../context/user/UserContext'

import UserModal from '../user/UserModal';

const Header = () => {

    // * context
    //const { users } = useContext(UserContext);
    
    // ! redux
    const usersRedux = useSelector((state) => state.allUsers.users);

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
                <h1>User Manager ({usersRedux.length})</h1>
                <Button variant="contained" color="primary" onClick={handleClickOpen}>Agregar</Button>
                <UserModal open={open} onClose={handleClose}></UserModal>
            </div>
        </>
    )
}

export default Header;