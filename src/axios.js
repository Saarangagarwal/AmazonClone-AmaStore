import axios from 'axios';

const instance = axios.create({
    //url of api (cloud function url)
    baseURL: 'http://localhost:5001/ama-store1/us-central1/api'
});

export default instance;