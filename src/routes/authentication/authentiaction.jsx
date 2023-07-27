import React from 'react';
import SignIn from '../../components/signIn/signIn';
import SignUp from '../../components/signUp/signUp';
import "./authentication.scss";
import { Divider } from '@mui/material';

const Authentiaction = () => {
    return (
        <div className='authPage'>
            <SignIn/>
            <Divider orientation="vertical" variant="middle" flexItem />
            <SignUp/>
        </div>
    );
}

export default Authentiaction;
