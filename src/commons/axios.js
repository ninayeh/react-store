import _axios from "axios";

const axios = baseURL => {
  const instance = _axios.create({
    // baseURL: baseURL || "http://localhost:4000",
    baseURL:
      baseURL || process.env.REACT_APP_API_DOMAIN || 'http://localhost:4000',
    timeout: 1000
  });

  // 設定攔截器
  instance.interceptors.request.use(
    config => {
      // 在請求送出前做一些處理，將 token 加到 header 裡面
      const jwToken = global.auth.getToken();
      config.headers["Authorization"] = "Bearer " + jwToken;
      return config;
    },
    error => {
      // Do something with request error
      return Promise.reject(error);
    }
  );

  return instance;
};

export { axios };
export default axios();