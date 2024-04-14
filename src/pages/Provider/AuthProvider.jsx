import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import auth from "../../FireBase/FireBase.config";

export const AuthContext = createContext(null)

// social media authentication
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    // create user 
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // sign in user
    const signInUser = (email, password) => {
    setLoading(true);
      return signInWithEmailAndPassword(auth, email, password);
    }; 

    // sign in with google

    const googleLogIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    // sign in with github

    const githubLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
    }

    // signOut
    const logOut = () => {
        setUser(null)
        setLoading(true)
        return signOut(auth)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        });
        return () => {
            unSubscribe();
        }
    },[])

    const authInfo = {
      user,
      loading,
      createUser,
      signInUser,
      logOut,
      googleLogIn,
      githubLogin,
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