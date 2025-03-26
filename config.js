// config.js
const config = {
    DEV_ENV: "dev",
    DEV_BASE_API_URL: "http://localhost:3010/api/fyc",
    DEV_BASE_LOGIN_URL: "http://localhost:5173/auth",
    PROD_BASE_API_URL: "http://localhost:3010/api/fyc1",
    PROD_BASE_LOGIN_URL: "http://localhost:5173/auth1",
};

export const BASE_API_URL = config.DEV_ENV === "dev" ? config.DEV_BASE_API_URL : config.PROD_BASE_API_URL;

export default config;
