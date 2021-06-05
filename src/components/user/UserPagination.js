import React, { useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { InputLabel, Select, MenuItem, FormControl } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

const UserPagination = ({usersPerPage, setUsersPerPage, totalUsers, paginate}) => {
    const classes = useStyles();

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <>
            <div className="pagination-wrapper">
                <FormControl className={classes.formControl}>
                    <InputLabel id="demo-simple-select-label">Usuarios por página</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={usersPerPage}
                    onChange={event => setUsersPerPage(event.target.value)}
                    >
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                    <MenuItem value={20}>20</MenuItem>
                    </Select>
                </FormControl>
                
                <ul>
                {
                    pageNumbers.map(number => (
                        <li key={number}>
                            <a onClick={() => paginate(number)} >
                                {number}
                            </a>
                        </li>
                    ))
                }
                </ul>
            </div>
        </>
    )
}

export default UserPagination;