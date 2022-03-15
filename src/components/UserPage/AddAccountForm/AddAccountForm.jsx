import React from 'react';
import { useDispatch } from "react-redux"
import { useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';

function AddAccountForm() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [accountDescription, setAccountDescription] = useState('');
    const [notes, setNotes] = useState('');
    // the folder data being sent will be the ID from the selected already existing folder so that it can be added to the database properly. 
    //this is so that when i retrieve that data again, we cant properly match the account to the correct folder to render onto the DOM
    const [folder, setFolder] = useState('');

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const dispatch = useDispatch();

    const handleSubmit = () => {
        console.log('hello');
        dispatch({
            type: 'ADD_ACCOUNT_POST',
            payload: {
                username,
                password,
                accountDescription,
                notes,
                folder,
            }
        })
    }
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '70%',
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };

    
    return (
        <>
            <Button sx={style} onClick={handleOpen}>Add Account</Button>
            <Modal
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                open={open}
                onClose={handleClose}
            >
                <Box
                    component="form"
                    sx={style}
                    noValidate
                    autoComplete="off"
                >
                    <Typography id="modal-modal-title" variant="h6" component="h2"> Add Account </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}> Enter in the Account you would like to add below </Typography>
                    <TextField
                        sx={{ mt: 2 }}
                        required
                        id="outlined-required"
                        label="Username"
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                    />
                    <TextField
                        sx={{ mt: 2 }}
                        required
                        id="outlined-password-input"
                        label="Password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                    <TextField
                        sx={{ mt: 2 }}
                        required
                        id="outlined-password-input"
                        label="Account Description"
                        value={accountDescription}
                        onChange={(event) => setAccountDescription(event.target.value)}
                    />
                    <TextField
                        sx={{ mt: 2 }}
                        required
                        id="outlined-password-input"
                        label="Notes"
                        value={notes}
                        onChange={(event) => setNotes(event.target.value)}
                    />

                    <InputLabel id="folder-label">Folder</InputLabel>
                    <Select
                        labelId="folder-label"
                        id="folders"
                        // open={open}
                        // onClose={handleClose}
                        // onOpen={handleOpen}
                        value={folder}
                        label="folder"
                        onChange={(event) => setFolder(event.target.value)}
                    >
                        <MenuItem value={0}> <em>None</em> </MenuItem>
                        <MenuItem value={1}> Email </MenuItem>
                    </Select>

                    <Button onClick={handleSubmit} variant="outlined">Submit Account</Button>

                </Box>
            </Modal>
        </>
    )

}
export default AddAccountForm