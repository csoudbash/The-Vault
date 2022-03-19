import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useSelector } from 'react-redux';
import { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import './UserPage.css'
import AddAccountForm from './AddAccountForm/AddAccountForm';
import AddFolderForm from './AddFolderForm/AddFolderForm';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Footer from '../Footer/Footer';
import { Typography } from '@mui/material';
import AccountCard from './AccountCard/AccountCard';
import EditAccount from './EditAccount/EditAccount';
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
          {accounts.map((account, i) => (
            <div key={i}>
              {/* <p>{account.username}</p> */}
              <AccountCard
                key={i}
                account={account}
              />
            </div>
          ))}
        </div>

        <AddAccountForm />
        {/* <AddFolderForm /> */}

        <Footer />
      </div>
    </>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
