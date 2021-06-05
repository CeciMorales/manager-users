import React, {useState, useEffect, useContext} from 'react'
import User from './User'
import UserPagination from './UserPagination';
import UserFilter from './UserFilter';
import UserContext from '../../context/user/UserContext'

const UserList = () => {

    const [ currentPage, setCurrentPage ] = useState(1);
    const [ usersPerPage, setUsersPerPage ] = useState(5);

    /*
    const [indexOfLastUser, setIndexOfLastUser] = useState(0);
    const [indexOfFirstUser, setIndexOfFirstUser] = useState(0);
    const [currentUsers, setCurrentUsers] = useState([])*/

    const [ searchTermInput, setSearchTermInput ] = useState('');
    const [ searchTermIsActive, setSearchTermIsActive ] = useState('all');

    const { users, getUsers} = useContext(UserContext);

    useEffect(() => {
      getUsers();
      
    }, []);

    // get current user
    //const indexOfLastUser = currentPage * usersPerPage;
    //const indexOfFirstUser = indexOfLastUser - usersPerPage;
    //const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);
    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

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
/*
    const setPagination = () => {
      //let listUsers = [];
      setIndexOfLastUser(currentPage * usersPerPage);
      setIndexOfFirstUser(indexOfLastUser - usersPerPage);
      setCurrentUsers(users.slice(indexOfFirstUser, indexOfLastUser))
      //setCurrentUsers(listUsers);
      console.log('dfjdla', currentUsers, indexOfFirstUser, indexOfLastUser)
    }*/

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
              currentUsers.filter(user => {
                if (searchTermInput == '' && searchTermIsActive === "all") {
                  return user;

                } else if (searchTermIsActive === "all" && inputConditions(user, searchTermInput)) {
                  return user;

                } else if (String(user.isActive) === searchTermIsActive && inputConditions(user, searchTermInput)) {
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
            totalUsers={users.length} 
            paginate={paginate}>
            
          </UserPagination>
        </>
    )
}

export default UserList;

/**
 * {
              // antes era users.map...
              currentUsers.map((user) => (
                <User key={user.id} user={user}></User>
              ))
            }



            {
              // antes era users.map...
              currentUsers.filter(user => {
                if (searchTerm == '') {
                  return user
                } else if (user.firstName.toLowerCase().includes(searchTerm.toLowerCase())){
                  return user
                }
              }
              ).map((user) => (
                <User key={user.id} user={user}></User>
              ))
            }

            const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);
 */