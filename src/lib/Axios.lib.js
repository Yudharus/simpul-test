import axios from 'axios';

const Axios = axios.create({
    baseURL: 'https://reqres.in/api',
});

export default Axios;
