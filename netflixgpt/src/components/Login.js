import React, { useEffect, useRef, useState } from 'react'
import Header from './Header'
import signInFormValidation from '../utils/validation'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/Firebase.config';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';

const Login = () => {
    const [signInForm, setSignInForm] = useState(true); // State to toggle between Sign In and Sign Up
    const name = useRef(null); // Ref for name input field
    const email = useRef(null); // Ref for email input field
    const password = useRef(null); // Ref for password input field
    const [errorMessage, setErrorMessage] = useState(); // State for error messages
    const navigate = useNavigate(); // Hook for navigation
    const dispatch = useDispatch(); // Hook for dispatching actions

    const handleSubmitButton = () => {
        // Validate email and password
        const message = signInFormValidation(email.current.value, password.current.value);
        setErrorMessage(message);
        if (message) return;

        // Sign Up logic
        if (!signInForm) {
            createUserWithEmailAndPassword(
                auth,
                email.current.value,
                password.current.value
            )
                .then((userCredential) => {
                    // Signed up successfully
                    const user = userCredential.user;
                    console.log(user);

                    updateProfile(user, {
                        displayName: name.current.value,
                        photoURL: "https://avatars.githubusercontent.com/u/137211232?v=4"
                    }).then(() => {
                        // Profile updated!
                        const { uid, email, displayName, photoURL } = auth.currentUser;
                        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
                        navigate("/browse")
                    }).catch((error) => {
                        // An error occurred
                        setErrorMessage(error.message)
                    });
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + "" + errorMessage)
                });

        } else {
            // Sign In logic
            signInWithEmailAndPassword(
                auth,
                email.current.value,
                password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    console.log(user)
                    navigate("/browse")
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + "" + errorMessage)
                });
        }
    }

    const toggleSignInForm = () => {
        // Toggle between Sign In and Sign Up forms
        setSignInForm(!signInForm);
    }

    return (
        <div>
            <Header />
            <div>
                <img className='absolute' src="https://assets.nflxext.com/ffe/siteui/vlv3/655a9668-b002-4262-8afb-cf71e45d1956/5ff265b6-3037-44b2-b071-e81750b21783/IN-en-20240715-POP_SIGNUP_TWO_WEEKS-perspective_WEB_c6d6616f-4478-4ac2-bdac-f54b444771dd_large.jpg" alt="netflix" />
            </div>
            <form onSubmit={(e) => e.preventDefault()} action="" className='w-3/12 absolute p-12 bg-black my-24 mx-auto right-0 left-0 bg-opacity-80 rounded-md'>
                <h1 className='text-white text-3xl py-4 font-semibold '>{signInForm ? "Sign In" : "Sign Up"}</h1>
                {!signInForm && (
                    <input ref={name} type="text" placeholder='Enter Name' className='p-3 my-4 w-full bg-slate-800 text-white' />
                )}
                <input ref={email} type="email" placeholder='Enter Email Address' className='p-3 my-4 w-full bg-slate-800 text-white' />

                <input ref={password} type="password" placeholder='Enter Password' className='p-3 my-4 w-full bg-slate-800 text-white' />

                <p className='text-red-500 font-semibold'>{errorMessage}</p>

                <button className='text-white p-3 my-4 bg-red-700 w-full rounded-md' onClick={handleSubmitButton}>{signInForm ? "Sign In" : "Sign Up"}</button>

                <div className='pt-5'>
                    <p onClick={toggleSignInForm} className='text-white cursor-pointer'>{signInForm ? "New to Netflix? Sign Up now" : "Already have an account? Sign In"}</p>
                </div>
            </form>
        </div>
    )
}

export default Login;
