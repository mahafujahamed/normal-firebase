import React, { useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from 'firebase/auth';
import app from '../../firebase/firebase.init';

const Login = () => {
    const [user, setUser] = useState(null);
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser)
                setUser(loggedInUser);
            })
            .catch(error => {
                console.log('error', error.message)
            })
    }

    const handleSignOut = () => {
        signOut(auth)
            .then(result => {
                setUser(null);
            })
            .catch(error => {
                console.log(error)
            })
    }

    const handleGithubSignIn = () => {
        signInWithPopup(auth, githubProvider)
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser)
                setUser(loggedInUser);
            })
            .catch(error => {
                console.log('error', error.message)
            })
    }

    return (
        <div>
            {/* user ? logout : sign in */}

            {
                user ?

                    <button onClick={handleSignOut}>Sign Out</button> :

                    <>
                        <button onClick={handleGoogleSignIn}>Google Login</button>
                        <button onClick={handleGithubSignIn}>Github Login</button>
                    </>

            }

            {user && <div>
                <h3>User: {user.displayName}</h3>
                <p>Email: {user.email}</p>
                <img src={user.photoURL} alt="" />
            </div>}
        </div>
    );
};

export default Login;