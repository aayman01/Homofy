import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import auth from "../../FireBase/FireBase.config";

export const AuthContext = createContext(null)

// social media authentication
const googleProvider = new GoogleAuthProvider();


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    console.log(user)
    // create user 
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // sign in user
    const signInUser = (email, password) => {
      return signInWithEmailAndPassword(auth, email, password);
    }; 

    // sign in with google

    const googleLogIn = () => {
        signInWithPopup(auth, googleProvider)
        .then()
        .catch()
    }

    // signOut
    const logOut = () => {
        return signOut(auth)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
        });
        return () => {
            unSubscribe();
        }
    },[])

    const authInfo = {
      createUser,
      signInUser,
      logOut,
      googleLogIn,
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children : PropTypes.node.isRequired,
}
export default AuthProvider;