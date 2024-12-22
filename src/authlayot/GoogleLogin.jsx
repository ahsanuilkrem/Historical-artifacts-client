import React from 'react';
import { useContext } from 'react';
import AuthContext from './AuthContext';

const GoogleLogin = () => {
    const {singInWithGoogle} = useContext(AuthContext);

    const handelGoogleSignIn = () => {
        singInWithGoogle()
        .then(result => {
            console.log(result.user);
        })
        .catch(error => {
            console.log(error.message);
        })
    }


    return (
        <div>
           
            <button onClick={handelGoogleSignIn} className='btn btn-block text-cyan-600'>Google </button>
        </div>
    );
};

export default GoogleLogin;