# ----------------------------------------
## Build for Local development
# ----------------------------------------
FROM node:18-alpine as development

# ----------------------------------------
## Build for production
# ----------------------------------------
FROM development as build

WORKDIR /usr/src/app

COPY . .

ENV NPM_CONFIG_LOGLEVEL warn
ENV NODE_ENV=production

RUN echo "Building for production"
RUN pwd
RUN ls -al

RUN npm ci
RUN npm run build
RUN npm prune --production
USER node

# ----------------------------------------
## Run for production
# ----------------------------------------
FROM development as production

COPY --chown=node:node --from=build /dist /dist
COPY --chown=node:node --from=build /node_modules /node_modules
COPY --chown=node:node --from=build /package.json /package.json
COPY --chown=node:node --from=build /.env.production /.env.production

CMD ["node", "dist/main.js"]
EXPOSE 3000
USER node
