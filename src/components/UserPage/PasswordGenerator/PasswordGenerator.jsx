import './PasswordGenerator.css'

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import Fab from '@mui/material/Fab';

import React from 'react';
import { useState, useRef } from "react";
function PasswordGenerator() {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [password, setPassword] = useState('');
    const passwordRef = useRef(null);

    const [value, setValue] = useState(8)

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '70%',
        height: '70%',
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 6, //padding
    };

    const generateNewPassword= () => {
        console.log('hello!');
       
        
    }
    
    const copyClipBoard = () => {
    
    }

    return (
        <>
            <div id='passwordGeneratorBody'>


                {/* <Button onClick={handleOpen}>Password Generator</Button> */}
                <Fab onClick={handleOpen} variant="extended" size="medium" color="primary">
                    {/* < AddCircleOutlineOutlinedIcon sx={{ ml: 1 }} /> */}
                    Password Generator
                </Fab>
                <Modal
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                    open={open}
                    onClose={handleClose}
                >
                    <Box
                        component="form"
                        sx={style}
                        id='passwordGenerator'
                        noValidate
                        autoComplete="off"
                    >

                        <Typography id="modal-modal-title" variant="h6" component="h2"> Password Generator </Typography>
                        {/* <Typography id="modal-modal-description" sx={{ mt: 2 }}> Select the criteria for a random password to be made </Typography> */}
                            <TextField
                                ref={passwordRef}
                                type="text"
                                value={password}
                                className="password-display-input"
                                readOnly
                            /> 
                            
                            <Typography className='password-display' sx={{ mt: 2, mb: 2 }}> Number of Characters </Typography>

                            {/* <form onSubmit={generateNewPassword}> */}
                                <FormControl >
                                    <FormGroup id="form" aria-label="position" >
                                        <div id="character-amount-container">

                                            <TextField
                                                className='number-range'
                                                type='range'
                                                min="8"
                                                max="50"
                                                defaultValue={value}
                                                onChange={(event) => setValue(event.target.value)}
                                                id='characterAmountRange'
                                            />

                                            <TextField
                                                className='number-input'
                                                type='number'
                                                min="8"
                                                max="50"
                                                defaultValue={value}
                                                onChange={(event) => setValue(event.target.value)}
                                                id='characterAmountNumber'
                                            />
                                        </div>
                                        <div>

                                        </div>
                                        <FormControlLabel
                                            // value="top"
                                            control={<Checkbox />}
                                            label="Include Uppercase"
                                            labelPlacement="top"
                                        />
                                        <FormControlLabel
                                            // value="top"
                                            control={<Checkbox />}
                                            label="Include Numbers"
                                            labelPlacement="top"
                                        />
                                        <FormControlLabel
                                            // value="top"
                                            control={<Checkbox />}
                                            label="Include Symbols"
                                            labelPlacement="top"
                                        />
                                        <Button variant="contained" id='generate-password-button' type='submit'>Generate Password</Button>
                                    </FormGroup>
                                </FormControl>
                            {/* </form> */}
                    </Box>
                </Modal>


            </div>
        </>
    )

}

export default PasswordGenerator;