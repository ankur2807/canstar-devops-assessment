FROM node:14

WORKDIR /now
COPY package*.json ./
RUN npm install
COPY . .

CMD [ "node", "server.js" ]

