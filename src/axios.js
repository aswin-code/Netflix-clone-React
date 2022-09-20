import axios from 'axios'
import { apiBaseUrl } from './constants/constants'


const intance = axios.create({
    baseURL: apiBaseUrl
});

export default intance