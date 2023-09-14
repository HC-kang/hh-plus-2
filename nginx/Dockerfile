FROM nginx:alpine

RUN rm -rf /etc/nginx/default.conf

COPY nginx.conf /etc/nginx/default.conf

RUN rm -rf /usr/share/nginx/html/*

COPY index.html /usr/share/nginx/html/index.html