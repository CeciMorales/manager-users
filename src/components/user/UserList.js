import React, {useEffect, useContext} from 'react'
import User from './User'
import UserContext from '../../context/user/UserContext'

const UserList = () => {

    const { users, getUsers} = useContext(UserContext);

    useEffect(() => {
      getUsers();
    }, []);

    return (
        <>
          <div className="users-list">
            {
              users.map((user) => (
                <User key={user.id} user={user}></User>
              ))
            }
          </div>
        </>
    )
}

export default UserList;