import React from 'react';
import { useSelector } from 'react-redux';
import { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import './UserPage.css'

import AddAccountForm from './AddAccountForm/AddAccountForm';
import AddFolderForm from './AddFolderForm/AddFolderForm';
import AccountCard from './AccountCard/AccountCard';
import PasswordGenerator from './PasswordGenerator/PasswordGenerator';

import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Footer from '../Footer/Footer';
import { autocompleteClasses, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';

function UserPage() {



  const user = useSelector((store) => store.user);
  const accounts = useSelector((store) => store.accounts.AccountsReducer)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: 'GET_ACCOUNTS'
    })
    dispatch({
      type: 'GET_FOLDERS'
    })
  }, [])

  return (
    <>
      <div className='passwordList'>
        <div>
          <Grid className='outerGrid' >
              {accounts.map((account, i) => (
                <div key={i}>

                  <AccountCard sx ={{ gap: 2, md: 4}} 
                    key={i}
                    account={account}
                  />

                </div>
              ))}
          </Grid>
        </div>

        <AddAccountForm />
        {/* <AddFolderForm /> */}

        <Footer />
        <PasswordGenerator/>
      </div>
    </>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
