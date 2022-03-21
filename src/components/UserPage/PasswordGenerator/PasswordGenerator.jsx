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

import React from 'react';
import { useState } from "react";
function PasswordGenerator() {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '50%',
        height: '50%',
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 6, //padding
    };

    return (
        <>
            <div id='passwordGeneratorBody'>

                
                    <Button onClick={handleOpen}>Generate Password</Button>
                    <Modal
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                        open={open}
                        onClose={handleClose}
                    >
                        <Box
                            component="form"
                            sx={style}
                            id ='passwordGenerator'
                            noValidate
                            autoComplete="off"
                        >

                            <Typography id="modal-modal-title" variant="h6" component="h2"> Password Generator </Typography>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}> Select the criteria for a random password to be made </Typography>

                            <FormControl >
                                <FormGroup aria-label="position">
                                <FormGroup row>
                                    <TextField
                                        type='range'
                                        min="1"
                                        max="50"
                                        defaultValue="10"
                                        className='characterAmountRange'
                                    />
                                    <TextField
                                        type='number'
                                        min="1"
                                        max="50"
                                        defaultValue="10"
                                        className='characterAmountNumber'
                                    />
                                    </FormGroup>
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
                                    <Button type='submit'>Generate Password</Button>
                                </FormGroup>
                            </FormControl>
                        </Box>
                    </Modal>

                
            </div>
        </>
    )

}

export default PasswordGenerator;