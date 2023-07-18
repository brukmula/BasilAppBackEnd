FROM node:18-alpine
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
# EXPOSE 3001

CMD [ "node", "app.js" ]
# Check that the API is running and the NET is accessable
HEALTHCHECK --interval=300s --timeout=30s --start-period=5s --retries=3 CMD wget http://localhost:3000/health -q -O - > /dev/null 2>&1 && wget "https://labs.bible.org/api/?passage=John+11:35" -q -O - > /dev/null 2>&1
