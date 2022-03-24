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

import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import Fab from '@mui/material/Fab';

function AddFolderForm() {// function for adding a new folder to the database for retrieval


    const [folder, setFolder] = useState('');

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const dispatch = useDispatch();

    const handleSubmit = () => {
        dispatch({
            type: 'SEND_NEW_FOLDER',
            payload: { folder: folder }
        })
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
            {/* <Button onClick={handleOpen}>Add New Folder</Button> */}
            <Fab onClick={handleOpen} variant="extended" size="medium" color="primary">
                    < AddCircleOutlineOutlinedIcon sx={{ ml: 1 }} />
                    Add New Folder
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
                    noValidate
                    autoComplete="off"
                >
                    <Typography id="modal-modal-title" variant="h6" component="h2"> Add a new folder </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}> Enter in the Account you would like to add below </Typography>
                    <TextField
                        sx={{ mt: 2 }}
                        required
                        id="outlined-required"
                        label="New Folder"
                        value={folder}
                        onChange={(event) => setFolder(event.target.value)}
                    />


                    <Button sx={{ margin: 5 }} onClick={handleSubmit} variant="outlined">Add Folder</Button>
                </Box>

            </Modal>
        </>
    )

}
export default AddFolderForm;