import React, { useState } from 'react'
import Header from './Header'
const Login = () => {
    const [singInForm, setSignInForm] = useState(true)

    const toggleSignInForm = () => {
        setSignInForm(!singInForm)
    }
    return (
        <div>
            <Header />
            <div>
                <img className='absolute' src="https://assets.nflxext.com/ffe/siteui/vlv3/655a9668-b002-4262-8afb-cf71e45d1956/5ff265b6-3037-44b2-b071-e81750b21783/IN-en-20240715-POP_SIGNUP_TWO_WEEKS-perspective_WEB_c6d6616f-4478-4ac2-bdac-f54b444771dd_large.jpg" alt="netflix" />
            </div>
            <form action="" className='w-3/12 absolute p-12 bg-black my-24 mx-auto right-0 left-0 bg-opacity-80 rounded-md'>
                <h1 className='text-white text-3xl py-4 font-semibold '>{singInForm ? "Sign In" : "Sign Up"}</h1>
                {singInForm && (
                    <input type="text" placeholder='Enter Name' className='p-3 my-4 w-full bg-slate-800' />
                )}
                <input type="email" placeholder='Enter Email Address' className='p-3 my-4 w-full bg-slate-800' />
                <input type="password" placeholder='Enter Password' className='p-3 my-4 w-full  bg-slate-800' />
                <button className='text-white p-3 my-4 bg-red-700 w-full rounded-md'>{singInForm ? "Sign In" : "Sign Up"}</button>

                <div className='pt-5'>
                    <p onClick={toggleSignInForm} className='text-white cursor-pointer'>{singInForm ? "New to Netflix? Sign Up now" : "Allready have an account? Sign In"}</p>
                </div>
            </form>
        </div>
    )
}

export default Login
