
import { connectOMDb } from './connectMovies';

// export const searchByTitle = (title: string = '') => {
//     return connectOMDb(`t=${title}`);
// }

// export const searchByID = (id: string = '') => {
//     return connectOMDb(`i=${id}`);
// }

export const searchMovies = (movieTitle: string = '') => {
    return connectOMDb(`s=${movieTitle}`);
}