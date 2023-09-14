FROM nginx:alpine

RUN rm -rf /etc/nginx/nginx.conf

COPY nginx.conf /etc/nginx/nginx.conf

RUN rm -rf /usr/share/nginx/html/*

COPY index.html /usr/share/nginx/html/index.html