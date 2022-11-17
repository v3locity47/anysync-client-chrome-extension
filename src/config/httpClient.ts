import axios from "axios";
import { AxiosRequestConfig } from "axios";
import Cookies from "js-cookie";
const apiUrl =
  process.env.NODE_ENV === "production"
    ? process.env.REACT_APP_PROD_API_ENDPOINT
    : process.env.REACT_APP_DEV_API_ENDPOINT;

axios.defaults.withCredentials = true;
const instance = axios.create({
  baseURL: apiUrl,
});

instance.interceptors.request.use(function (
  config: AxiosRequestConfig
): AxiosRequestConfig {
  try {
    const userCookie = Cookies.get("user");
    if (userCookie) {
      const user = JSON.parse(userCookie);
      config.headers!.authorization = user ? user.token : "";
    }
    return config;
  } catch (err) {
    throw err;
  }
});

export { instance as HttpClient };
