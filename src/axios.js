import axios from 'axios';

const instance = axios.create({
    //url of api (cloud function url)

    //this baseURL is for local dev only
    baseURL: 'http://localhost:5001/ama-store1/us-central1/api'
});

export default instance;