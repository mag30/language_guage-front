import axios from 'axios';
import { jwtDecode } from "jwt-decode";
import "../shared/helpers/localStorageHelpers"
import {
    getAccessToken,
    getRefreshToken,
    removeAccessToken, removeRefreshToken,
    setAccessToken,
    setRefreshToken
} from "../shared/helpers/localStorageHelpers";

const BACKEND_API_URL = "http://localhost:8085/api/"
const axiosInstance = axios.create({
    baseURL: BACKEND_API_URL
});

const isTokenExpired = (token) => {
    try {
        const decoded = jwtDecode(token);
        const now = Date.now().valueOf() / 1000;
        return decoded.exp < now;
    } catch (error) {
        return true;
    }
};

const refreshAuthToken = async () => {
    try {
        const response = await axios.post(BACKEND_API_URL+'user/refresh', {
            "refreshToken": getRefreshToken(),
        });
        const newToken = response.data.token;
        const refreshToken = response.data.refreshToken

        setAccessToken(newToken)
        setRefreshToken(refreshToken)
        return newToken;
    } catch (error) {
        console.error('Failed to refresh token', error);

        removeAccessToken()
        removeRefreshToken()
        window.location.href = '/login';
        return null;
    }
};

axiosInstance.interceptors.request.use(
    async (config) => {
        let token = getAccessToken();

        if (token) {
            if (isTokenExpired(token)) {
                token = await refreshAuthToken();
                if (!token) {
                    return Promise.reject(new Error('Token refresh failed'));
                }
            }
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default axiosInstance;
