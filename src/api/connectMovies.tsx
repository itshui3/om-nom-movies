/*
a draft file for initializing the app's connection with the OMDb API
*/

import Axios from 'axios';

const key = process.env.REACT_APP_API_KEY as string;

const omdb_URL = `https://www.omdbapi.com/?apikey=${key}&`;

export const connectOMDb = () => {
    Axios.get(omdb_URL)
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        })
}