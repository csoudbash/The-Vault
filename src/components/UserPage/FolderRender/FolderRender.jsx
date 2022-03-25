import { useSelector } from 'react-redux';
import Typography from '@mui/material/Typography';
import React from 'react';

import './FolderRender.css';
import FolderDropdown from '../FolderDropdown/FolderDropDown';

function FolderRender() {

    const folders = useSelector((store) => store.folders.FoldersReducer);
    // console.log("in folder render:", folders);

    return (
        <>
            <div className = 'folder-display'>
                {folders.map((folder, i) => (
                    <FolderDropdown
                        key={i}
                        folder={folder}
                    />
                ))}
            </div>
        </>
    )
}
export default FolderRender;