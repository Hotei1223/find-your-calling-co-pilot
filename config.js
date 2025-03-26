// config.js
const config = {
    DEV_ENV: "prod",
    DEV_BASE_API_URL: "http://localhost:3010/api/fyc",
    DEV_BASE_LOGIN_URL: "http://localhost:5173/auth",
    PROD_BASE_API_URL: "https://api.testir.xyz/server10/api/fyc",
    PROD_BASE_LOGIN_URL: "https://testir.xyz/auth",
};

export const BASE_API_URL = config.DEV_ENV === "dev" ? config.DEV_BASE_API_URL : config.PROD_BASE_API_URL;

export default config;
