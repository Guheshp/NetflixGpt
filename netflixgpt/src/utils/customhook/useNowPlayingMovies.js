import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addnowPlayingMovies } from '../movieslice';
import { API_KEY } from '../constant';

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();
    // const url = `http://www.omdbapi.com/?apikey=${API_KEY}&s=all&type=movie`
    // const url = `https://freetestapi.com/api/v1/movies`
    const url = `https://api.kinocheck.de/movies?tmdb_id=299534`


    const getNowPlayingMovies = async () => {
        try {
            const response = await fetch(url);
            const json = await response.json();
            const movieData = json
            // console.log(movieData);
            dispatch(addnowPlayingMovies(movieData));
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getNowPlayingMovies();
    }, []);

};

export default useNowPlayingMovies;
