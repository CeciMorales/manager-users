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

        await axios.get('http://localhost:3000/users')
            .then(response => {
                dispatch({
                    type: 'GET_USERS',
                    payload: response.data
                })
            }).catch(error => {
                console.error(error);
            })
    }

    const addUser = async (newUser) => {

        let id = uuidv4();
        let user = {...newUser, id: id}

        await axios.post('http://localhost:3000/users', user)
            .then(response => {
                
                dispatch({
                    type: 'ADD_USER',
                    payload: user
                    
                })       
            }).catch(error => {
                console.error(error);
            })
    }

    const deleteUser = async (id) => {

        await axios.delete('http://localhost:3000/users/' + id)
            .then(response => {
                dispatch({
                    type: 'DELETE_USER',
                    payload: id
                }) 
            }).catch(error => {
                console.error(error);
            })

    }

    const changeIsActive = async (user) => {

        await axios.put('http://localhost:3000/users/' + user.id, {
            ...user,
            isActive : !user.isActive
        }).then(response => {
            dispatch({
                type: 'CHANGE_IS_ACTIVE',
                payload: user.id
            }) 
        }).catch(error => {
            console.error(error);
        })
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