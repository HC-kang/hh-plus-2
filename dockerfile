FROM node:18-alpine as dist

COPY package*.json ./

RUN npm ci

COPY . ./

RUN npm run build

CMD ["node", "dist/main.js"]