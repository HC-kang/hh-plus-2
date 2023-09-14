FROM nginx:alpine

RUN rm -rf /etc/nginx/conf.d/default.conf

COPY nginx.conf /etc/nginx/conf.d/default.conf

RUN rm -rf /usr/share/nginx/html/*

COPY index.html /usr/share/nginx/html/index.html