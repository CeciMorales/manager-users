import { SettingsEthernet } from '@material-ui/icons';
import { GET_USERS, GET_USER, ADD_USER, DELETE_USER, CHANGE_IS_ACTIVE } from '../types';

export default (state, action) => {
    const { payload, type } = action;

    switch(type) {

        case GET_USERS:
            
            return {
                ...state,
                users: payload
            }

        case GET_USER:
            
            return {
                ...state,
                selectedUser: payload
            }

        case ADD_USER:
            return {
                ...state,
                users: [...state.users, payload]
            }
            
        case DELETE_USER:            
            return {
                ...state,
                users: state.users.filter((user) => user.id !== payload)
            }

        case CHANGE_IS_ACTIVE:
            return {
                ...state,
                users: state.users.map((user) => user.id == payload ? {...user, isActive: !user.isActive} : user)
            }
    }
}