import React, {useContext} from 'react'
import { Tooltip, IconButton } from '@material-ui/core';
import { Delete, Close, Done } from '@material-ui/icons';

import UserContext from '../../context/user/UserContext'

const UserActions = (props) => {

  const user = props.value
  const { deleteUser, changeIsActive } = useContext(UserContext);

    return (
        <>
        <div className="right-side">
          {
          user.isActive
          ?
            <Tooltip title="desactivar">
              <IconButton onClick={() => changeIsActive(user.id)}>
                <Close></Close>
              </IconButton>
            </Tooltip>
          :
            <Tooltip title="activar">
              <IconButton onClick={() => changeIsActive(user.id)}>
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