import React, {useContext, useEffect} from 'react'
import { useParams } from "react-router-dom";

// cosas de redux
import { useSelector, useDispatch } from 'react-redux';
import { getUserR, changeIsActiveR } from '../../redux/actions/userActions';
import axios from 'axios';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Tooltip, IconButton } from '@material-ui/core';
import { Delete, Close, Done } from '@material-ui/icons';

// *import UserContext from '../../context/user/UserContext'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        width: '50vh',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 'auto',
        marginBottom: 'auto'
       
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        width: 400,
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },
    
}));

const UserCard = () => {
    const classes = useStyles();
    const theme = useTheme();
    const {id} = useParams();

    // * const { getUser, selectedUser, changeIsActive } = useContext(UserContext);

    // ! cosas de redux
    const selectedUserRedux = useSelector((state) => state.allUsers.selectedUser);
    const dispatch = useDispatch();

    const fetchUser = async (id) => {
        await axios.get('http://localhost:3000/users/' + id)
        .then(response => {
            //console.log("id selected user", response.data);
            dispatch(getUserR(response.data));
        }).catch(error => {
            console.error(error);
        })
    }

    const updateUser = async () => {
        await axios.put('http://localhost:3000/users/' + selectedUserRedux.id, {
                ...selectedUserRedux,
                isActive : !selectedUserRedux.isActive
            }).then(response => {
                dispatch(changeIsActiveR(selectedUserRedux.id))
            }).catch(error => {
                console.error(error);
            })
      }
    useEffect(() => {
        //getUser(id);
        fetchUser(id)
        console.log(selectedUserRedux)
    }, []);

    const clickHandler = () => {
        // * context
        //changeIsActive(selectedUser);
        //getUser(id);

        // ! redux
        updateUser();
        fetchUser(id);
    }

    return (
        <>
            {selectedUserRedux !== null
            ?
            <Card className={classes.root}>
                <div className={classes.details}>
                    <CardContent className={classes.content}>
                    <Typography component="h5" variant="h5">
                        {selectedUserRedux.firstName} {selectedUserRedux.lastName}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        { selectedUserRedux.isActive
                        ?
                        <p style={{ color: '#3CB371' }}>{selectedUserRedux.firstName} is active</p>
                        :
                        <p style={{color: '#FF6347'}}>{selectedUserRedux.firstName} is not active</p>
                        } 
                    </Typography>
                    <div className="right-side">
                    {/**{
                    selectedUserRedux.isActive
                    ?
                        <Tooltip title="desactivar">
                        <IconButton onClick={() => clickHandler()}>
                            <Close></Close>
                        </IconButton>
                        </Tooltip>
                    :
                        <Tooltip title="activar">
                        <IconButton onClick={() => clickHandler()}>
                            <Done></Done>
                        </IconButton>
                        </Tooltip>
                    } **/}
                    </div>
                    </CardContent>
                    <div className={classes.controls}>
                    <Typography variant="subtitle1" color="textSecondary">
                        {selectedUserRedux.email}
                    </Typography>
                    
                    </div>
                </div>
                <CardMedia
                    className={classes.cover}
                    image={selectedUserRedux.image}
                    title={selectedUserRedux.image}
                />
            </Card>
            :
            <div></div>
            }
        </>
    )
}

export default UserCard;

