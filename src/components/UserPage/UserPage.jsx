import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useSelector } from 'react-redux';
import { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import './UserPage.css'
import AddAccountForm from './AddAccountForm/AddAccountForm';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Footer from '../Footer/Footer';
function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: 'GET_ACCOUNTS'
    })
  }, [])
  
  return (
    <div className='passwordList'>
      <p>folder 1</p>
      <p>folder 2</p>
     
        <AddAccountForm />
        <Footer/>
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
