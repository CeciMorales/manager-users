import React, { useReducer } from 'react';
import UserReducer from './UserReducer';
import UserContext from './UserContext';


const UserState = (props) => {

    const initialState = {
        users: [
            {
                id: 1,
                firstName: 'Ceci',
                lastName: 'Morales',
                email: 'cecimoar@hotmail.com',
                image: 'https://www.bunko.pet/__export/1611708686389/sites/debate/img/2021/01/26/9_datos_interesantes_sobre_los_perros_pug_que_tal_vez_no_sabxas.jpeg_1404015752.jpeg',
                isActive: true,
            },
            {
                id: 2,
                firstName: 'Rosi ',
                lastName: 'Miranda',
                email: 'rosi@hotmail.com',
                image: 'https://cdn2www.mundo.com/fotos/201503/pug-031-600x456.jpg',
                isActive: false,
            }  
        ]
    }


    const [state, dispatch] = useReducer(UserReducer, initialState);

    const getUsers = () => {
        console.log('hola')
       
        dispatch({
            type: 'GET_USERS',
            payload:  state.users
        })
    }

    const addUser = (newUser) => {
     
        // toDo: cambiar forma de obtener id
        let id = new Date()
        let user = {...newUser, id: id}

        dispatch({
            type: 'ADD_USER',
            payload: [...state.users, user]
        })
    }

    const deleteUser = (id) => {
        //console.log('delete user', id);
        //console.log('restante', state.users.filter((item) => item.id !== id))
        
        dispatch({
            type: 'DELETE_USER',
            payload: state.users.filter((item) => item.id !== id)
        })

    }

    const changeIsActive = (id) => {
      dispatch({
            type: 'CHANGE_IS_ACTIVE',
            payload: state.users.map((user) => user.id == id ? {...user, isActive: !user.isActive} : user)
        })

    }

    // todo: cambiar borde de imagen

    return (
        <UserContext.Provider
            value={{
                users: state.users,
                getUsers,
                addUser, 
                deleteUser, 
                changeIsActive
            }}
        >
            {props.children}

        </UserContext.Provider>

    )
}

export default UserState;