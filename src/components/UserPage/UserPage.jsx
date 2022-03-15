import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';
import './UserPage.css'


function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  return (
    <div className = 'passwordList'>
      <p>folder 1</p>
      <p>forlder 2</p>
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
