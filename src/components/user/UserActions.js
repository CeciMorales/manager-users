import React, {useContext} from 'react'
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { deleteUserR, changeIsActiveR } from '../../redux/actions/userActions';

import { Tooltip, IconButton } from '@material-ui/core';
import { Delete, Close, Done } from '@material-ui/icons';

import UserContext from '../../context/user/UserContext'

const UserActions = ({user}) => {

  // * context const { deleteUser, changeIsActive } = useContext(UserContext);

  // ! cosas de redux    
  const dispatch = useDispatch();

  const removeUser = async () => {
    await axios.delete('http://localhost:3000/users/' + user.id)
            .then(response => {
                dispatch(deleteUserR(user.id)) 
            }).catch(error => {
                console.error(error);
            })
  }

  const updateUser = async () => {
    await axios.put('http://localhost:3000/users/' + user.id, {
            ...user,
            isActive : !user.isActive
        }).then(response => {
            dispatch(changeIsActiveR(user.id))
        }).catch(error => {
            console.error(error);
        })

  }

    return (
        <>
        <div className="right-side">
          {
          user.isActive
          ?
            <Tooltip title="desactivar">
              <IconButton onClick={() => updateUser(user.id)}>
                <Close></Close>
              </IconButton>
            </Tooltip>
          :
            <Tooltip title="activar">
              <IconButton onClick={() => updateUser(user.id)}>
                <Done></Done>
              </IconButton>
            </Tooltip>
          } 
            <Tooltip title="eliminar">
              <IconButton onClick={() => removeUser(user.id)}>
                <Delete></Delete>
              </IconButton>
            </Tooltip>
          </div>
        </>
    )
}

export default UserActions;