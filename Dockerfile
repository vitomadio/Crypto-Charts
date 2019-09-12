FROM node:8.15.0

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

ARG NODE_ENV=production

CMD ["npm", "run", "start"]