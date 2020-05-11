import React from 'react';
import { signInWithGoogle } from '../../firebase/firebase.utils'

export const Login = () => (
    <div>
    <button onClick={signInWithGoogle}> Sign In With Google </button>
    </div>

);