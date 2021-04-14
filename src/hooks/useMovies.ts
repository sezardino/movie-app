/* Core */
import { useState, useEffect } from 'react';
import { useQuery } from 'react-query';

/* Instruments */
import { api } from '../api';
import { filterStore } from '../lib/filterStore';
import { Movie } from '../types';

export const useMovies = () => {
    const query = useQuery<Array<Movie>>([ 'movies', filterStore.filter ], () => api.getMovies(filterStore.filter));
    const [ movies, setMovies ] = useState<Array<Movie> | null>(null);

    useEffect(() => {
        const getMoviesByFilter = async () => {
            const newMovies = await api.getMovies(filterStore.filter);

            setMovies(newMovies);
        };

        getMoviesByFilter();
    }, [ filterStore.filter ]);

    return query;
};
