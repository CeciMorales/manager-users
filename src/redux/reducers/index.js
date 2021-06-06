// mutiple reducers are here
import { combineReducers } from 'redux';
import { userReducer } from './userReducer';

const reducers = combineReducers({
    // here you can create keys for your reducers
    allUsers: userReducer
})

export default reducers;