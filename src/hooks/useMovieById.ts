/* Core */
import { useState, useEffect } from 'react';
import { useQuery } from 'react-query';

/* Instruments */
import { api } from '../api';
import { Movie } from '../types';

export const useMovieById = (id: number) => {
    const query = useQuery([ 'movie', id ], () => api.getMovieById(id));

    return query;
};
