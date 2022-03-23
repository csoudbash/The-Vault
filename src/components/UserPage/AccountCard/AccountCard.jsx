import React from 'react';
import { Grid, Typography, Button, Modal } from '@mui/material'
import EditAccount from '../EditAccount/EditAccount';
import { useHistory, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import './AccountCard.css'
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
    // account.url = 'https://www.facebook.com/';
    return (
        <>
            <Grid item xs={3} m={4} >
                <Card className="accountCard">
                    <CardActionArea>
                        <CardContent className='accountCardTop'>
                            <a target="_blank" href={account.url}>
                                <Typography className='accountUrl' >Click Me to login to account!</Typography>
                            </a>
                        </CardContent>
                    </CardActionArea>
                    <CardActionArea onClick={handleOpen}>
                        <CardContent className='accountCardBottom' >
                            <Typography className='accountDescription'>{account.account_description}</Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>


        </>
    )

}
export default AccountCard;
