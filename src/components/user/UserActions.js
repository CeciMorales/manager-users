import React, {useContext} from 'react'
import { Tooltip, IconButton } from '@material-ui/core';
import { Delete, Close, Done } from '@material-ui/icons';

import UserContext from '../../context/user/UserContext'

const UserActions = ({user}) => {

  const { deleteUser, changeIsActive, getUsers } = useContext(UserContext);

    return (
        <>
        <div className="right-side">
          {
          user.isActive
          ?
            <Tooltip title="desactivar">
              <IconButton onClick={() => changeIsActive(user)}>
                <Close></Close>
              </IconButton>
            </Tooltip>
          :
            <Tooltip title="activar">
              <IconButton onClick={() => changeIsActive(user)}>
                <Done></Done>
              </IconButton>
            </Tooltip>
          } 
            <Tooltip title="eliminar">
              <IconButton onClick={() => deleteUser(user.id)}>
                <Delete></Delete>
              </IconButton>
            </Tooltip>
          </div>
        </>
    )
}

export default UserActions;