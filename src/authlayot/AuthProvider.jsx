import React, { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import auth from '../firebase/firebase.init';
import axios from 'axios';

const googleProvider = new GoogleAuthProvider();


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const singInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // signOut
    const signOutuse = () => {
        setLoading(true);
        return signOut(auth);
    }

    // singIn with google
    const singInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    // useEffect(() => {
    //     const unsuscribe = onAuthStateChanged(auth, currentUser => {
    //         setUser(currentUser);
    //         console.log(currentUser?.email);
    //         if (currentUser?.email) {
    //             const user = { email: currentUser.email }
    //             axios.post('http://localhost:5000/jwt', user,
    //                 { withCredentials: true })
    //                 .then(res => {
    //                     console.log('login token', res.data);
    //                     setLoading(false);
    //                 })
    //         }
    //         else {
    //             axios.post('http://localhost:5000/logout', {}, {
    //                 withCredentials: true
    //             })
    //                 .then(res => {
    //                     console.log('logout', res.data);
    //                     setLoading(false);
    //                 })
    //         }

    //     })
    //     return () => {
    //         unsuscribe();
    //     }
    // }, [])


    const authInfo = {
        user,
        loading,
        createUser,
        singInUser,
        signOutuse,
        singInWithGoogle,


    }


    useEffect(() => {
        const unsuscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log(currentUser);

            setLoading(false);
        })
        return () => {
            unsuscribe();
        }
    }, [])




    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;