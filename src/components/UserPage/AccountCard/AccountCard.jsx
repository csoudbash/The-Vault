import React from 'react';
import { Grid, Typography, Button, Modal } from '@mui/material'
import EditAccount from '../EditAccount/EditAccount';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function AccountCard({ account }) {

    const history = useHistory();
    const dispatch = useDispatch();
    
    const handleOpen = () => {
        dispatch({
            type: 'SET_EDIT_ACCOUNT',
            payload: account
        })
        history.push('/editview')
    }

    return (
        <>
            <Grid>
                <Typography>{account.username}</Typography>
                <Typography>{account.password}</Typography>
                <Typography>{account.notes}</Typography>
                <Typography>{account.folder_name}</Typography>
                <Typography>{account.account_description}</Typography>
                <Button onClick={handleOpen}>Edit</Button>
            </Grid>

        </>
    )

}
export default AccountCard;
