import React, {useContext, useEffect} from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import UserContext from '../../context/user/UserContext'

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
        width: 151,
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

    const { getUser, selectedUser } = useContext(UserContext);

    useEffect(() => {
        getUser(id);
        console.log("use effect",id);
    }, []);

    return (
        <>
            {selectedUser !== null
            ?
            <Card className={classes.root}>
                <div className={classes.details}>
                    <CardContent className={classes.content}>
                    <Typography component="h5" variant="h5">
                        {selectedUser.firstName} {selectedUser.lastName}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        { selectedUser.isActive
                        ?
                        <p style={{ color: '#3CB371' }}>{selectedUser.firstName} is active</p>
                        :
                        <p style={{color: '#FF6347'}}>{selectedUser.firstName} is not active</p>
                        } 
                    </Typography>
                    </CardContent>
                    <div className={classes.controls}>
                    <Typography variant="subtitle1" color="textSecondary">
                        {selectedUser.email}
                    </Typography>
                    
                    </div>
                </div>
                <CardMedia
                    className={classes.cover}
                    image={selectedUser.image}
                    title={selectedUser.image}
                />
            </Card>
            :
            <div></div>
            }
        </>
    )
}

export default UserCard;

