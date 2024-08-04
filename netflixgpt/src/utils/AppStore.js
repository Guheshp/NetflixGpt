import { configureStore } from '@reduxjs/toolkit'
import userReducer from "./userSlice"
import moviesReduces from "./movieslice"

export default configureStore({
    reducer: {
        user: userReducer,
        movies: moviesReduces,
    },
})