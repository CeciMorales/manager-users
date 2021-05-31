import React, {useContext} from 'react'
import { Tooltip, IconButton } from '@material-ui/core';
import { Delete, Close, Done } from '@material-ui/icons';

import UserContext from '../../context/user/UserContext'

const UserActions = (props) => {

  const user = props.value
  const { deleteUser, changeIsActive, getUsers } = useContext(UserContext);

  const handleIsActive = async () => {
    await changeIsActive(user)
    getUsers();
    // {() => changeIsActive(user)
  }

  const handleDelete = async () => {
    await deleteUser(user.id);
    getUsers();
    //() => deleteUser(user.id)

  }

    return (
        <>
        <div className="right-side">
          {
          user.isActive
          ?
            <Tooltip title="desactivar">
              <IconButton onClick={() => handleIsActive()}>
                <Close></Close>
              </IconButton>
            </Tooltip>
          :
            <Tooltip title="activar">
              <IconButton onClick={() => handleIsActive()}>
                <Done></Done>
              </IconButton>
            </Tooltip>
          }
           
            <Tooltip title="eliminar">
              <IconButton onClick={() => handleDelete()}>
                <Delete></Delete>
              </IconButton>
            </Tooltip>
          </div>
        </>
    )
}

export default UserActions;