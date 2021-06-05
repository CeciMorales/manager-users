import React from 'react'
import { TextField } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const UserFilter = ({
    searchTermInput, setSearchTermInput,
    searchTermIsActive, setSearchTermIsActive
}) => {


    const inputChangeHandler = (event) => {
        console.log(event.target.name)
        /*setSearchTerm({
            ...searchTerm,
            [event.target.name] : event.target.value
        })*/
        setSearchTermInput(event.target.value)
        setSearchTermIsActive(event.target.value)
    }


    return (
        <>

            <div className="filter-wrapper">
                <TextField  
                    type="text"
                    label="Name, last name or email"
                    name="searchedInput"
                    onChange={(event) => setSearchTermInput(event.target.value)}
                >
                </TextField>
                
                <RadioGroup 
                    aria-label="isActive" 
                    name="isActive" 
                    className="radio-wrapper"
                    value={searchTermIsActive} 
                    onChange={(event) => setSearchTermIsActive(event.target.value)}>
                    <FormControlLabel value="all" control={<Radio />} label="All" />
                    <FormControlLabel value="true" control={<Radio />} label="Active users" />
                    <FormControlLabel value="false" control={<Radio />} label="Not active users" />
                </RadioGroup>
            </div>
        

        </>
    )
}

export default UserFilter;