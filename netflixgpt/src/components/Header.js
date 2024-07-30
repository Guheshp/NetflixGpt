import { signOut } from 'firebase/auth'
import React, { useState } from 'react'
import { auth } from '../utils/Firebase.config'
import { useDispatch, useSelector } from 'react-redux'
import { removeUser } from '../utils/userSlice'
import { useNavigate } from 'react-router-dom'

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
            navigate("/")
        }).catch((error) => {
            navigate("/error")
        });
    }

    return (
        <section>
            <div className='absolute px-8 py-2 left-0 right-0 bg-gradient-to-b from-black z-10 flex justify-between items-center'>
                <img className='w-44' src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="netflix-logo" />
                <div className='relative flex items-center flex-col'>
                    {user && (
                        <img className='cursor-pointer w-10 rounded-full' onClick={handleUserDropdown} src={user?.photoURL} alt="user-icon" />
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
