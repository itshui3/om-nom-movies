
import { connectOMDb } from './connectMovies';

export const searchMovies = (movieTitle: string = '') => {
    return connectOMDb(`s=${movieTitle}`);
}