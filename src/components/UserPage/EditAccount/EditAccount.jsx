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
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function EditAccount() {

    const [newUsername, setNewUsername] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [newAccountDescription, setNewAccountDescription] = useState('');
    const [newNotes, setNewNotes] = useState('');
    const [newFolder, setNewFolder] = useState('');

    const folders = useSelector((store) => store.folders.FoldersReducer);
    const accountToEdit = useSelector((store) => store.editAccount.editAccountsReducer);

    const history = useHistory();

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const dispatch = useDispatch();

    const handleSubmit = () => {

        console.log(
            // newUsername,
            // newPassword,
            // newAccountDescription,
            // newNotes,
            newFolder,
        );  
        // dispatch({
        //     type: '',
        //     payload: {
        //         username,
        //         password,
        //         accountDescription,
        //         notes,
        //         folder,
        //     }
        // })
        history.push('/user');
    }
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '50%',
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 6, //padding
    };
    
    return (
        <>
            {/* <Modal
                open={open}
                onClose={handleClose}

            > */}

                <Box
                    component="form"
                    sx={style}
                    noValidate
                    autoComplete="off"
                >
                    <Typography id="modal-modal-title" variant="h6" component="h2"> View/ Edit account </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}> yes </Typography>
                    <TextField
                        sx={{ mt: 2 }}
                        required
                        id="outlined-required"
                        label="Username"
                        // placeholder={accountToEdit.username}
                        defaultValue = {accountToEdit.username}
                        onChange={(event) => setNewUsername(event.target.value)}
                    />
                    <TextField
                        sx={{ mt: 2 }}
                        required
                        id="outlined-password-input"
                        label="Password"
                        defaultValue={accountToEdit.password}
                        onChange={(event) => setNewPassword(event.target.value)}
                    />
                    <TextField
                        sx={{ mt: 2 }}
                        required
                        id="outlined-password-input"
                        label="Account Description"
                        defaultValue={accountToEdit.account_description}
                        onChange={(event) => setNewAccountDescription(event.target.value)}
                    />
                    <TextField
                        sx={{ mt: 2 }}
                        required
                        id="outlined-password-input"
                        label="Notes"
                        defaultValue={accountToEdit.notes}
                        onChange={(event) => setNewNotes(event.target.value)}
                    />

                    <InputLabel id="folder-label">Folder</InputLabel>
                    <Select
                        labelId="folder-label"
                        id="folders"
                        // value={accountToEdit.folder ? accountToEdit.folder : "" }
                        // defaultValue={accountToEdit.folder}
                        label="folder"
                        onChange={(event) => setNewFolder(event.target.value)}
                        >

                        <div>
                        {folders.map((folder, i) => (
                                <div key={i}>
                                    <MenuItem value={folder.id}> <em>{folder.folder_name}</em> </MenuItem>
                                </div>
                            
                              ))}
                        </div>
                    </Select>


                    <Button onClick={handleSubmit} variant="outlined">conditionally rendered edit button</Button>
                </Box>
            {/* </Modal> */}


        </>


    )
}
export default EditAccount;