import React, { useState } from 'react';
import Login from '../../components/login/login';
import Signup from '../../components/signup/signup';
import './auth.css';

let Auth = (props) => {
    let [newUser, setNewUser] = useState(false);
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
            console.log(user.code);
            console.log(user.message);
            // setLoginError(error_message);
        }
        // else {
        //     console.log("Signed in as : ", user)
        //     return props.AuthenticationStatus(LoginDetails);
        // }
        })
        .catch(err => console.error("Login error : " + err));
        console.log('Logged in')
        props.AuthStatus(data);
    }
    let signupHandler = (data) => {
        props.firebase.createNewUser(data.email, data.password)
        .then(user => console.log("Signed up as : ", user))
        .catch(err => console.error("Sign up error" + err))
        console.log('Signed up')
        props.AuthStatus(data);
    }
    return (
        <div className="Auth">
            {newUser ? (
            <div>
                <Signup Authenticate={(userData) => signupHandler(userData)} />
                <p>New user? <span onClick={NewUserHandler} className="Link">Log-in</span></p>
            </div>) : (
            <div>
                <Login Authenticate={(userData) => loginHandler(userData)} />
                <p>Existing user? <span onClick={NewUserHandler} className="Link">Sign-up</span></p>
            </div>)
            }
        </div>
    )
}
export default Auth;