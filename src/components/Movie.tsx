/* Core */
import { Link } from 'react-router-dom';
import { MovieProps } from '../types';

export const MovieComp = (props: MovieProps) => {
    return (
        <Link to = { `/movies/${props.movie.id}` }>
            <article>
                <h1>{props.movie.genre}</h1>
                <img
                    alt = { props.movie.title }
                    src = { props.movie.poster }
                />
                <footer>
                    <h1>{props.movie.title}</h1>
                    <code>{props.movie.rating}</code>
                </footer>
            </article>
        </Link>
    );
};
