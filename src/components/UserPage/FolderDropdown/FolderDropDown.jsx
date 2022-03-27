import AccountCard from '../AccountCard/AccountCard';

import { useSelector } from 'react-redux';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Grid, Button, Modal } from '@mui/material'

import './FolderDropDown.css'
import { letterSpacing } from '@mui/system';

function FolderDropdown({ folder }) {

    const accounts = useSelector((store) => store.accounts.AccountsReducer)

    const [expanded, setExpanded] = React.useState(false);
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    // create array that we then reference for displaying the information of each account
    let arrayOfAccounts = [];

    for (let account of accounts) {
        if(folder.id === account.folder_id){
            console.log("in for of loop",folder.folder_name);
            arrayOfAccounts.push(account);
        }
    }


    return (
        <>
            <Accordion className='accordian' onChange={handleChange()}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                        {folder.folder_name}
                    </Typography>
                </AccordionSummary>

                <AccordionDetails className='accoridian-details'>
                    <Grid container className='outerGrid' spacing={0}>
                        
                        {arrayOfAccounts.map((account, i) => (
                            <AccountCard
                                key={i}
                                account={account}
                            // folderId= {folder.id}
                            />

                        ))}

                    </Grid>
                </AccordionDetails>
            </Accordion>



        </>

    )
}
export default FolderDropdown;