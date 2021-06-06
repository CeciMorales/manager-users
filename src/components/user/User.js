import React, {useContext} from 'react'
import { Link } from 'react-router-dom';
import { Paper, Avatar} from '@material-ui/core';

import UserActions from './UserActions'

const User = ({user}) => {

    return (
        <>
        <Paper className="user-row" elevation={3}>
          <div className="left-side">
            <Link to={`/users/${user.id}`} >
              <Avatar 
                src={user.image}
                style={ user.isActive ? { border: '5px solid #3CB371' } : { border: '5px solid #FF6347' } }
                >
              </Avatar>
            </Link>
            <div className="user-name-container">
              <span className="user-name">{ user.firstName }</span>
              <span className="user-lastname"> { user.lastName } </span>
              <span className="user-email"> ({ user.email }) </span>
            </div>
          </div>
          <UserActions user={user}></UserActions>
          
        </Paper>
        
        </>
    )
}

export default User;

