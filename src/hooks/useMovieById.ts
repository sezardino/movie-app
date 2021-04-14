/* Core */
import { useState, useEffect } from 'react';

/* Instruments */
import { api } from '../api';
import { Movie } from '../types';

export const useMovieById = (id: number) => {
    const [ movie, setMovie ] = useState<Movie | null>(null);

    useEffect(() => {
        const getMovieById = async () => {
            const newMovies = await api.getMovieById(id);

            setMovie(newMovies);
        };

        getMovieById();
    }, [ id ]);

    return { data: movie };
};
