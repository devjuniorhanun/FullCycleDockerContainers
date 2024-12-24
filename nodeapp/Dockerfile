FROM node:23-slim

WORKDIR /home/node/app
COPY package*.json .
RUN npm install

USER node

COPY . .

CMD [ "node",  "index.js" ]