import { GET_USERS, ADD_USER, DELETE_USER, CHANGE_IS_ACTIVE } from '../types';

export default (state, action) => {
    const { payload, type } = action;

    switch(type) {

        case GET_USERS:
            
            return {
                users: payload
            }
            
        case ADD_USER:
            return {
                users: [...state.users, payload]
            }
            
        case DELETE_USER:            
            return {
                users: state.users.filter((user) => user.id !== payload)
            }

        case CHANGE_IS_ACTIVE:
            return {
                users: state.users.map((user) => user.id == payload ? {...user, isActive: !user.isActive} : user)
            }
    }
}