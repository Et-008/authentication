import React, { useState } from 'react';
import Login from '../../components/login/login';
import Signup from '../../components/signup/signup';
import './auth.css';

let Auth = (props) => {
    let [newUser, setNewUser] = useState(false);
    let [error,  setError] = useState('');
    let NewUserHandler = () => {
        let currentState = newUser;
        setNewUser(!currentState);
    }

    let loginHandler = (data) => {
        props.firebase.existingUser(data.email, data.password)
        .then(user => {
            console.log(user)
            if(user.code) {
                let error_message = null;
                if(user.code === "auth/invalid-email") {
                    error_message = "The Mail id you entered is incorrect"
                }
                else if(user.code === "auth/user-not-found") {
                    error_message = "This Mail id does not belong to a user account, please signup"
                }
                else if(user.code === "auth/wrong-password") {
                    error_message = "The Mail id and Password does not match"
                }
                else {
                    error_message = user.message;
                }
                setError(error_message);
        }
        else {
            console.log("Logged in as : ", user)
            return props.AuthStatus(data);
        }
        })
        .catch(err => console.error("Login error : " + err));
    }

    let signupHandler = (data) => {
        props.firebase.createNewUser(data.email, data.password)
        .then(user => {
            console.log(user)
            return props.AuthStatus(data);
        })
        .catch(err => {
            setError(err);
            console.error("Sign up error" + err)
        })
    }
    return (
        <div className="Auth">
            {newUser ? (
            <div>
                <Signup Authenticate={(userData) => signupHandler(userData)} />
                {error ? <p className="ErrorDisplay">Sign-up Error : {error}</p> : null}
                <p>New user? <span onClick={NewUserHandler} className="Link">Log-in</span></p>
            </div>) : (
            <div>
                <Login Authenticate={(userData) => loginHandler(userData)} />
                {error ? <p className="ErrorDisplay">Log-in Error : {error}</p> : null}
                <p>Existing user? <span onClick={NewUserHandler} className="Link">Sign-up</span></p>
            </div>)
            }
        </div>
    )
}
export default Auth;