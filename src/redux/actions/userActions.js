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
    
    /*
        await axios.get('http://localhost:3000/users/' + id)
            .then(response => {
                //console.log("id selected user", response.data);
                dispatch({
                    type: 'GET_USER',
                    payload: response.data
                })
            }).catch(error => {
                console.error(error);
            })
            */
}

export const addUserR =  (newUser) => {
    return {
        type: ActionTypes.ADD_USER,
        payload: newUser
    }
    /*

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
            })*/
}

export const deleteUserR =  (id) => {
    return {
        type: ActionTypes.DELETE_USER,
        payload: id
    }

    /*
        await axios.delete('http://localhost:3000/users/' + id)
            .then(response => {
                dispatch({
                    type: 'DELETE_USER',
                    payload: id
                }) 
            }).catch(error => {
                console.error(error);
            })
            */

}

export const changeIsActiveR = (id) => {
    return {
        type: ActionTypes.CHANGE_IS_ACTIVE,
        payload: id
    }

    /*
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
        */
}

    
