FROM node:14


WORKDIR /now

COPY package*.json ./
RUN npm install
COPY . .
RUN apt-get update && apt-get install -y nginx
COPY nginx/default /etc/nginx/sites-available/default


EXPOSE 80

CMD service nginx start && node server.js
