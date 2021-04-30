/*
a draft file for initializing the app's connection with the OMDb API
*/

import Axios from 'axios';

require('dotenv').config();
const key = process.env.API_KEY as string;

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