// take initial state and action

import { ActionTypes } from '../constants/action-types'

const initialState = {
    users: [],
    selectedUser: null
}

export const userReducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case ActionTypes.GET_USERS:
            return {
                ...state,
                users: payload
            }
        
        case ActionTypes.GET_USER:
            return {
                ...state,
                selectedUser: payload

            }

        case ActionTypes.ADD_USER:
            // payload user completo
            return {
                ...state,
                users: [...state.users, payload]

            }

        case ActionTypes.DELETE_USER: 
        // payload es el id
            return {
                ...state,
                users: state.users.filter((user) => user.id !== payload)

            }

        case ActionTypes.CHANGE_IS_ACTIVE:
            // payload id nada mas
            return {
                ...state,
                users: state.users.map((user) => user.id == payload ? {...user, isActive: !user.isActive} : user)

            }
        default: 
            return state;

    }

}