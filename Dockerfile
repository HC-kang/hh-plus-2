# ----------------------------------------
## Build for Local development
# ----------------------------------------
FROM node:18-alpine as development

# ----------------------------------------
## Build for production
# ----------------------------------------
FROM development as build

COPY . .

ENV NPM_CONFIG_LOGLEVEL warn
ENV NODE_ENV=production

RUN echo "Building for production"
RUN pwd
RUN ls -al

# for devDependencies
RUN npm install
RUN npm run build
RUN npm prune --production
USER node

# ----------------------------------------
## Run for production
# ----------------------------------------
FROM development as production

COPY --chown=node:node --from=build /dist /dist
COPY --chown=node:node --from=build /node_modules /node_modules

CMD ["node", "dist/main.js"]
EXPOSE 3000
USER node
