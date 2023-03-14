FROM node:18.12.0

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

# Run the setupDatabase.js script using CMD
CMD [ "npm", "run", "create-db", "&&", "npm","run", "start-dev" ]
