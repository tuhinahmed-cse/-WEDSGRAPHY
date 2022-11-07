import React, { createContext, useEffect, useState } from 'react';
import {  createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithPopup, updateProfile, } from "firebase/auth";
import app from '../../firebase/firebase.config';


export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] =useState(true);

    const providerLogin = (provider)=>{
        setLoading(true);
        return signInWithPopup(auth, provider);
    }

    const createUser = (email, password) => {
        setLoading(true);
        
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateUserProfile = (profile)=>{

        return updateProfile(auth.currentUser, profile);
    }

    useEffect(()=>{

        const unsubcribe = onAuthStateChanged(auth, (currentUser)=>{
            console.log(currentUser)
        
            setUser(currentUser);
            // setLoading(false);
        });
        return () => {
            unsubcribe();
        }
        
        },[])



    const authInfo= {user, loading, providerLogin, createUser, updateUserProfile }

    return (
        <AuthContext.Provider value={authInfo}>
        {children}
      </AuthContext.Provider>
    );
};

export default AuthProvider;