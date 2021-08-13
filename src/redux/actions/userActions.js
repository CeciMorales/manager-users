import { ActionTypes } from '../constants/action-types';

export const getUsersR = (users) => {
    console.log('desde actions', users)

    return {
        type: ActionTypes.GET_USERS,
        payload: users
    }

}

export const getUserR =  (user) => {
    return {
        type: ActionTypes.GET_USER,
        payload: user
    }
    
}

export const addUserR =  (newUser) => {
    return {
        type: ActionTypes.ADD_USER,
        payload: newUser
    }

}

export const deleteUserR =  (id) => {
    return {
        type: ActionTypes.DELETE_USER,
        payload: id
    }


}

export const changeIsActiveR = (id) => {
    return {
        type: ActionTypes.CHANGE_IS_ACTIVE,
        payload: id
    }

}

    
