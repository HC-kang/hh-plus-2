FROM nginx:alpine

RUN rm -rf /etc/nginx/default.conf

RUN echo "test"

COPY default.conf /etc/nginx/default.conf

RUN rm -rf /usr/share/nginx/html/*

COPY index.html /usr/share/nginx/html/index.html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]