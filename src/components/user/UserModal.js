import React, { useState, useContext } from 'react'
import { Button, Modal, TextField, FormControlLabel } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';

import UserContext from '../../context/user/UserContext'

const UserModal = (props) => {

    const { onClose, selectedValue, open } = props;

    const { addUser, getUsers } = useContext(UserContext);

    const [newUser, setNewUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        image: '',
        isActive: true
    });

    const closeHandler = () => {
        onClose(selectedValue);
    };

    const inputChangeHandler = (event) => {
        // console.log(event.target.name)
        setNewUser({
            ...newUser,
            [event.target.name] : event.target.value
        })
    }

    const checkboxChangeHandler = (event) => {
        setNewUser({
            ...newUser,
            [event.target.name] : event.target.checked
        })
    }

    const submitHandler = async (event) => {
        event.preventDefault();
        console.log('enviando datos', newUser)
        await addUser(newUser);
        onClose(selectedValue);
    }

    return (
        <>
            <Modal open={open}> 
                <div className="add-user-modal">
                    <h1>Agregar Usuario</h1>
                    <form onSubmit={submitHandler}>
                        <div>
                        <TextField 
                            className="user-modal-input" 
                            variant="outlined" 
                            label="first name"
                            name="firstName"
                            onChange={inputChangeHandler}
                            required
                        >
                            
                        </TextField>
                        <TextField 
                            className="user-modal-input" 
                            variant="outlined" 
                            label="last name"
                            name="lastName"
                            onChange={inputChangeHandler}
                            required
                        >

                        </TextField>
                        <TextField 
                            className="user-modal-input" 
                            variant="outlined" 
                            label="email"
                            name="email"
                            onChange={inputChangeHandler}
                            required
                        >

                        </TextField>
                        <TextField 
                            className="user-modal-input" 
                            variant="outlined" 
                            label="image"
                            name="image"
                            onChange={inputChangeHandler}
                            required
                        >

                        </TextField>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    name="isActive"
                                    label="is active"
                                    defaultChecked
                                    onChange={checkboxChangeHandler}
                                />
                            }
                            label="is active"
                        />
                      
                        </div>

                        <div className="actions">
                            <Button onClick={closeHandler}>Cerrar</Button>
                            <Button type="submit">Agregar</Button>
                        
                        </div>
                    </form>
                </div>
            </Modal>
        </>
    )
}

export default UserModal;

    