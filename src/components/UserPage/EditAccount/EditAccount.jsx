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
import swal from 'sweetalert';

function EditAccount() {

    const accountToEdit = useSelector((store) => store.editAccount.editAccountsReducer);
    const id = useSelector((store) => store.editAccount.editAccountsReducer.id);
    
    const [newUsername, setNewUsername] = useState(accountToEdit.username);
    const [newPassword, setNewPassword] = useState(accountToEdit.password);
    const [newAccountDescription, setNewAccountDescription] = useState(accountToEdit.account_description);
    const [newNotes, setNewNotes] = useState(accountToEdit.notes);
    const [newUrl, setNewUrl] = useState(accountToEdit.url);
    const [newFolder, setNewFolder] = useState('');

    const folders = useSelector((store) => store.folders.FoldersReducer);
    const history = useHistory();
    
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const dispatch = useDispatch();

    const handleSubmit = () => {
        swal({
            title: "Are you sure?",
            text: "Make sure the fields you have changed were meant to be altered, This will permanently change this account!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willEdit) => {
              if (willEdit) {
                dispatch({
                type: 'UPDATE_ACCOUNT',
                    payload: {
                        id,
                        newUsername,
                        newPassword,
                        newAccountDescription,
                        newNotes,
                        newUrl,
                    }
                })
                history.push('/user');
                swal("The Account has been updated!", {
                icon: "success"
              });
            } else {
                swal("Changes have not been saved");
            }
        });
        // handleClose();
    }

    const handleDelete = () => {
        swal("The Account has been deleted!", {
            icon: "success"});
        dispatch({
            type:'DELETE_ACCOUNT',
            payload: id,
        })
        // handleClose();
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
                {/* <Typography id="modal-modal-description" sx={{ mt: 2 }}>  </Typography> */}
                <TextField
                    sx={{ mt: 2 }}
                    required
                    id="outlined-required"
                    label="Username"
                    defaultValue={accountToEdit.username}
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
                    id="outlined-password-input"
                    label="Account Description"
                    defaultValue={accountToEdit.account_description}
                    onChange={(event) => setNewAccountDescription(event.target.value)}
                />
                <TextField
                    sx={{ mt: 2 }}
                    id="outlined-password-input"
                    label="Notes"
                    defaultValue={accountToEdit.notes}
                    onChange={(event) => setNewNotes(event.target.value)}
                />
                 <TextField
                    sx={{ mt: 2 }}
                    id="outlined-password-input"
                    label="Url"
                    defaultValue={accountToEdit.url}
                    onChange={(event) => setNewUrl(event.target.value)}
                />


                <InputLabel id="folder-label">Folder</InputLabel>
                    <Select
                        labelId="folder-label"
                        id="folders"
                        value={accountToEdit.folder ? accountToEdit.folder : "" }
                        defaultValue={accountToEdit.folder}
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
                <Button onClick={handleDelete} variant="outlined">Delete</Button>
            </Box>
            {/* </Modal> */}


        </>


    )
}
export default EditAccount;