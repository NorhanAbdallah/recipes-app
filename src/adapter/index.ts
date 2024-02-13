import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.spoonacular.com',
    withCredentials: false,
});

instance.interceptors.request.use(config => config);

export default instance;
