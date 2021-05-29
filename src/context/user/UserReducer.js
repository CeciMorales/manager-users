import { GET_USERS, ADD_USER, DELETE_USER, CHANGE_IS_ACTIVE } from '../types';

export default (state, action) => {
    const { payload, type } = action;

    switch(type) {

        case GET_USERS:
            return {
                ...state, 
                users: payload
            }

        case ADD_USER:
            return {
                ...state,
                users: payload
            }
        
        case DELETE_USER:
            return {
                ...state, 
                users: payload
            }

        case CHANGE_IS_ACTIVE:
            return {
                ...state,
                users: payload
            }
    }
}