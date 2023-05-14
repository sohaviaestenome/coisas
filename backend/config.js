require('dotenv').config();

module.exports = {
  PORT: process.env.PORT,
  NODE_ENV: process.env.NODE_ENV,
  development: {
    DB: {
      DB_HOST: process.env.DB_HOST,
      DB_USER: process.env.DB_USER,
      DB_DATABASE: process.env.DB_DATABASE,
      DB_PASSWORD: process.env.DB_PASSWORD,
      DB_PORT: process.env.DB_PORT
    },
  },
  production: {
    DB: {
      DB_HOST: process.env.RDS_HOSTNAME,
      DB_USER: process.env.RDS_USERNAME,
      DB_DATABASE: process.env.DB_DATABASE_PROD,
      DB_PASSWORD: process.env.RDS_PASSWORD,
      DB_PORT: process.env.RDS_PORT,
    },
  },
  testing: {
    DB: {
      DB_HOST: process.env.DB_HOST_TEST,
      DB_USER: process.env.DB_USER_TEST,
      DB_DATABASE: process.env.DB_DATABASE_TEST,
      DB_PASSWORD: process.env.DB_PASSWORD_TEST,
      DB_PORT: process.env.DB_PORT_TEST,
    },
  },
  docker: {
    DB: {
      DB_HOST: process.env.DB_HOST_DOCKER,
      DB_USER: process.env.DB_USER_DOCKER,
      DB_DATABASE: process.env.DB_DATABASE_DOCKER,
      DB_PASSWORD: process.env.DB_PASSWORD_DOCKER,
      DB_PORT: process.env.DB_PORT,
    },
  },
}