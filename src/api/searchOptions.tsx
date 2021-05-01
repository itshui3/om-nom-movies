
import { connectOMDb } from './connectMovies';

export const searchByTitle = (title: string = '') => {
    return connectOMDb(`t=${title}`);
}