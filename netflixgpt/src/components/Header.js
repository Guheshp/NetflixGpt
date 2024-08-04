import { onAuthStateChanged, signOut } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { auth } from '../utils/Firebase.config'
import { useDispatch, useSelector } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'
import { useNavigate } from 'react-router-dom'
import { LOGO, USER_AVATAR } from '../utils/constant'

const Header = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [userLogoSropdown, setUserLogoSropdown] = useState(false)
    const handleUserDropdown = () => {
        setUserLogoSropdown(!userLogoSropdown)
    }

    const user = useSelector(store => store.user)

    const handleSignOut = () => {
        signOut(auth).then(() => {
            dispatch(removeUser)
        }).catch((error) => {
            navigate("/error")
        });
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user
                const { uid, email, displayName, photoURL } = user;
                dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
                navigate("/browse")

            } else {
                // User is signed out
                dispatch(removeUser());
                navigate("/")
            }
        });
        //unsubscribe when components unmount 
        return () => unsubscribe()
    }, [dispatch]);

    return (
        <section>
            <div className='absolute px-8 py-2 left-0 right-0 bg-gradient-to-b from-black z-10 flex justify-between items-center'>
                <img className='w-44' src={LOGO} alt="netflix-logo" />
                <div className='relative flex items-center flex-col'>
                    {user && (
                        <img className='cursor-pointer w-10 rounded' onClick={handleUserDropdown} src={user?.photoURL} alt="user-icon" />
                    )}
                    {userLogoSropdown && (
                        <div className='absolute top-12 rounded shadow-lg max-w-7xl'>
                            <button onClick={handleSignOut} className='text-white bg-red-700 hover:bg-red-500 focus:outline-none  '>SignOut</button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}

export default Header
