FROM node:11-alpine
LABEL authors="Samuel Howard"

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

RUN npm install
# If building for production
# RUN npm ci --omit=dev

# Bundle app source
COPY . .

# API ports
EXPOSE 3000
EXPOSE 3001

CMD [ "node", "app.js" ]