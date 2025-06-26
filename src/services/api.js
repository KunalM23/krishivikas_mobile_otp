import axios from 'axios';

const BASE_URL = 'https://d32neyt9p9wyaf.cloudfront.net/api/v3';

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const sendOTP = (mobile) => api.post('/otp-send', { mobile });

export const verifyLogin = (mobile) => api.post('/login', { mobile });

export const registerUser = (data) => api.post('/register', data);

export const fetchProfile = (userId, token) =>
  api.get(`/post-details?user_id=${userId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export default api;
