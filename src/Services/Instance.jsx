import axios from "axios";
const axiosInstance = axios.create({
  baseURL: 'https://aspirationias.onrender.com', // Remove /api/v1
});
export default axiosInstance;
