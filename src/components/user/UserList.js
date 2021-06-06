import React, {useState, useEffect, useContext} from 'react'

// ! imports de redux
import { useSelector, useDispatch } from 'react-redux';
import { getUsersR } from '../../redux/actions/userActions';
import axios from 'axios';

import User from './User'
import UserPagination from './UserPagination';
import UserFilter from './UserFilter';
import UserContext from '../../context/user/UserContext'

const UserList = () => {

    const [ currentPage, setCurrentPage ] = useState(1);
    const [ usersPerPage, setUsersPerPage ] = useState(5);

    const [ searchTermInput, setSearchTermInput ] = useState('');
    const [ searchTermIsActive, setSearchTermIsActive ] = useState('all');

    // const { users, getUsers} = useContext(UserContext); context

    // ! cosas de redux
    // obtiene users del state
    const usersRedux = useSelector((state) => state.allUsers.users);

    const dispatch = useDispatch();

    const fetchUsers = async () => {
      await axios.get('http://localhost:3000/users')
            .then(response => {
                dispatch(getUsersR(response.data))
            }).catch(error => {
                console.error(error);
            })
    }

    useEffect(() => {
      //getUsers();
      fetchUsers(); // redux
      
    }, []);

    // get current user
    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    //const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser); context
    const currentUsersRedux = usersRedux.slice(indexOfFirstUser, indexOfLastUser);

    const paginate = (pageNumber) => {
      return setCurrentPage(pageNumber)
    }

    const inputConditions = (user, searchTermInput) => {
      if (user.firstName.toLowerCase().includes(searchTermInput.toLowerCase()) ||
          user.lastName.toLowerCase().includes(searchTermInput.toLowerCase()) ||
          user.email.toLowerCase().includes(searchTermInput.toLowerCase())) {
            return true
          } else {
            return false
          }
    }

    return (
        <>
          <UserFilter 
            searchTermInput={searchTermInput} 
            setSearchTermInput={setSearchTermInput}
            searchTermIsActive={searchTermIsActive} 
            setSearchTermIsActive={setSearchTermIsActive}

            ></UserFilter>
          <div className="users-list">
            {
              // antes era users.map...
              currentUsersRedux.filter(user => {
                if (searchTermInput == '' 
                  && searchTermIsActive === "all") {
                  return user;

                } else if (searchTermIsActive === "all" 
                          && inputConditions(user, searchTermInput)) {
                  return user;

                } else if (String(user.isActive) === searchTermIsActive 
                          && inputConditions(user, searchTermInput)) {
                  return user

                } 
              }
              ).map((user) => (
                <User key={user.id} user={user}></User>
              ))
            }
            
            
          </div>
          <UserPagination 
            usersPerPage={usersPerPage} 
            setUsersPerPage={setUsersPerPage}
            //totalUsers={users.length} context
            totalUsers={usersRedux.length} // redux
            paginate={paginate}>
            
          </UserPagination>
        </>
    )
}

export default UserList;
