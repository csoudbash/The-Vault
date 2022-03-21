import React from 'react';
import { Grid, Typography, Button, Modal } from '@mui/material'
import EditAccount from '../EditAccount/EditAccount';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

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
            
                <Card className="accountCard" sx={{ width: 345 }}>
                    <CardActionArea>
                        <CardContent>
                            <Typography>{account.account_description}</Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActionArea onClick={handleOpen}>
                        <CardContent>
                            <Typography>{account.account_description}</Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                {/* <Typography>{account.username}</Typography>
                <Typography>{account.password}</Typography>
                <Typography>{account.notes}</Typography> */}
                {/* <Typography>{account.folder_name}</Typography> */}
                {/* <Button onClick={handleOpen}>Edit</Button> */}
            

        </>
    )

}
export default AccountCard;
