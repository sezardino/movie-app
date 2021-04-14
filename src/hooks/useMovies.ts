/* Core */
import { useState, useEffect } from 'react';

/* Instruments */
import { api } from '../api';
import { filterStore } from '../lib/filterStore';
import { Movie } from '../types';

export const useMovies = () => {
    const [ movies, setMovies ] = useState<Array<Movie> | null>(null);

    useEffect(() => {
        const getMoviesByFilter = async () => {
            const newMovies = await api.getMovies(filterStore.filter);

            setMovies(newMovies);
        };

        getMoviesByFilter();
    }, [ filterStore.filter ]);

    return { data: movies };
};
