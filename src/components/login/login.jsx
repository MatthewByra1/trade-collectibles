import React from 'react';
import { signInWithGoogle, signInWithFacebook, signInWithGithub } from '../../firebase/firebase.utils';
import './login.scss';
// Handles login form via OAuth
export const Login = () => (
    <div>
        <h1>
    <button className='Google' onClick={signInWithGoogle}> Sign In With Google </button> 
    </h1>
    <h2>
    <button className='Facebook' onClick={signInWithFacebook}> Sign In With Facebook </button>
    </h2>
    <h3>
    <button className='Github' onClick={signInWithGithub}> Sign In With Github </button>
    </h3>
    </div>

);