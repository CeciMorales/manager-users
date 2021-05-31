import React, { useReducer } from 'react';
import axios from 'axios';


import UserReducer from './UserReducer';
import UserContext from './UserContext';

const UserState = (props) => {

    const { v4: uuidv4 } = require('uuid');

    const initialState = {
        users: []
    }


    const [state, dispatch] = useReducer(UserReducer, initialState);

    const getUsers = async () => {
        
        try {
            const result = await axios.get('http://localhost:3000/users');
            dispatch({
                type: 'GET_USERS',
                payload:  result.data
            })
        } catch (error) {
            console.error(error);
        }
    }

    const addUser = async (newUser) => {
     
        let id = uuidv4();
        let user = {...newUser, id: id}

        try {
            await axios.post('http://localhost:3000/users', user);
            dispatch({
                type: 'ADD_USER',
                //payload: [...state.users, user]
                payload: state.users
            })

        } catch (error) {
            console.error(error);
        } 
    }

    const deleteUser = async (id) => {

        try {
            await axios.delete('http://localhost:3000/users/' + id);
            dispatch({
                type: 'DELETE_USER',
                //payload: state.users.filter((item) => item.id !== id)
                payload: state.users
            })

        } catch (error) {
            console.error(error);
        }

    }

    const changeIsActive = async (user) => {

        try {
            await axios.put('http://localhost:3000/users/' + user.id, {
                ...user,
                isActive : !user.isActive
            });

            dispatch({
                type: 'CHANGE_IS_ACTIVE',
                //payload: state.users.map((item) => item.id == user.id ? {...item, isActive: !item.isActive} : item)
                payload: state.users
            })

        } catch (error) {
            console.error(error);
        }
    }

    return (
        <UserContext.Provider
            value={
                {
                    users: state.users,
                    getUsers,
                    addUser, 
                    deleteUser, 
                    changeIsActive
                }
            }
        >
            {props.children}

        </UserContext.Provider>

    )
}

export default UserState;