import axios from 'axios';
import baseURL from '../utils/baseURL';

export const axiosInstance = axios.create({
  baseURL: baseURL
});