# ----------------------------------------
## Build for Local development
# ----------------------------------------
FROM node:18-alpine as development

# ----------------------------------------
## Build for production
# ----------------------------------------
FROM development as build

ARG DATABASE_CONNECTION
ARG DATABASE_HOST
ARG DATABASE_PORT
ARG DATABASE_USERNAME
ARG DATABASE_PASSWORD
ARG DATABASE_NAME

RUN echo "DATABASE_CONNECTION=$DATABASE_CONNECTION" >> .env.production
RUN echo "DATABASE_HOST=$DATABASE_HOST" >> .env.production
RUN echo "DATABASE_PORT=$DATABASE_PORT" >> .env.production
RUN echo "DATABASE_USERNAME=$DATABASE_USERNAME" >> .env.production
RUN echo "DATABASE_PASSWORD=$DATABASE_PASSWORD" >> .env.production
RUN echo "DATABASE_NAME=$DATABASE_NAME" >> .env.production

COPY . .

ENV NPM_CONFIG_LOGLEVEL warn
ENV NODE_ENV=production

# for devDependencies
RUN NODE_ENV=development npm ci 
RUN NODE_ENV=production npm run build
RUN npm prune --production
USER node

# ----------------------------------------
## Run for production
# ----------------------------------------
FROM development as production

COPY --chown=node:node --from=build /dist /dist
COPY --chown=node:node --from=build /node_modules /node_modules
COPY --chown=node:node --from=build /.env.production /.env.production

ENV NODE_ENV=production
RUN echo "this is NODE_ENV"
RUN echo ${NODE_ENV}
RUN pwd
RUN ls -al
RUN cat .env.production

CMD ["node", "dist/main.js"]
EXPOSE 3000
USER node
