FROM node:18-alpine

COPY package*.json ./

RUN echo "test"

RUN npm ci

COPY . ./

RUN npm run build

CMD ["node", "dist/main.js"]