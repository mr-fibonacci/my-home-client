import axios from "axios";
import createAuthRefreshInterceptor from "axios-auth-refresh";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL;
axios.defaults.withCredentials = true;

const refreshAuthLogic = () =>
  axios
    .post("/dj-rest-auth/token/refresh/", null, {
      skipAuthRefresh: true,
      interceptNetworkError: true,
    }) // non-typed params...
    .then(() => {
      return Promise.resolve();
    })
    .catch(() => {
      return Promise.reject();
    });

createAuthRefreshInterceptor(axios, refreshAuthLogic);
