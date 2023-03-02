FROM node:lts-alpine

WORKDIR /usr/src/server

COPY . .

RUN npm install

CMD ["yarn", "dev"]

EXPOSE 3001
