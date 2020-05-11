import React from 'react';
import {Link} from 'react-router-dom';
import { ReactComponent as Logo } from "../../assets/commerce-and-shopping.svg";
import './header.scss'
import {auth} from '../../firebase/firebase.utils';

// Main header that is displayed on every page

export const Header = ({ currentUser}) => (
    <div className='header'>
<Link className="logo-container" to='/'>
<Logo className="logo"/>
</Link>
    <div className='nav'>
        <Link className="trade" to='/trade'>TRADE</Link>
        <Link className="contact" to='/contact'>CONTACT</Link>
        {
             currentUser ? (
            <Link className="contact" onClick={()=> auth.signOut()}>
                SIGN OUT
            </Link>
            ):(
            <Link className="contact" to='/login'>LOGIN</Link>
            )
        }
        </div>
    </div>
);