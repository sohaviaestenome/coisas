require('dotenv').config();

module.exports = {
  PORT: process.env.PORT,
  SESSION_SECRET: process.env.SESSION_SECRET,
  NODE_ENV: process.env.NODE_ENV,
  FACEBOOK: {
    CONSUMER_KEY: process.env.FACEBOOK_CLIENT_ID,
    CONSUMER_SECRET: process.env.FACEBOOK_CLIENT_SECRET
  },
  GOOGLE: {
    CONSUMER_KEY: process.env.GOOGLE_CLIENT_ID,
    CONSUMER_SECRET: process.env.GOOGLE_CLIENT_SECRET
  },
  development: {
    DB: {
      DB_HOST: process.env.DB_HOST,
      DB_USER: process.env.DB_USER,
      DB_DATABASE: process.env.DB_DATABASE,
      DB_PASSWORD: process.env.DB_PASSWORD,
      DB_PORT: process.env.DB_PORT
    },
    REDIRECT_URL: process.env.REDIRECT_URL_DEV,
    GOOGLE_CALLBACK_URL: process.env.GOOGLE_CALLBACK_URL_DEV,
    FACEBOOK_CALLBACK_URL: process.env.FACEBOOK_CALLBACK_URL_DEV,
  },
  production: {
    DB: {
      DB_HOST: process.env.DB_HOST_PROD,
      DB_USER: process.env.DB_USER_PROD,
      DB_DATABASE: process.env.DB_DATABASE_PROD,
      DB_PASSWORD: process.env.DB_PASSWORD_PROD,
      DB_PORT: process.env.DB_PORT_PROD,
    },
    REDIRECT_URL: process.env.REDIRECT_URL_PROD,
    GOOGLE_CALLBACK_URL: process.env.GOOGLE_CALLBACK_URL_PROD,
    FACEBOOK_CALLBACK_URL: process.env.FACEBOOK_CALLBACK_URL_PROD,
  },
  testing: {
    DB: {
      DB_HOST: process.env.DB_HOST_TEST,
      DB_USER: process.env.DB_USER_TEST,
      DB_DATABASE: process.env.DB_DATABASE_TEST,
      DB_PASSWORD: process.env.DB_PASSWORD_TEST,
      DB_PORT: process.env.DB_PORT_TEST,
    },
    REDIRECT_URL: process.env.REDIRECT_URL_TEST,
    GOOGLE_CALLBACK_URL: process.env.GOOGLE_CALLBACK_URL_DEV,
    FACEBOOK_CALLBACK_URL: process.env.FACEBOOK_CALLBACK_URL_DEV,
  },
}