FROM nginx:alpine

RUN rm -rf /etc/nginx/default.conf

COPY nginx.conf /etc/nginx/nginx.conf

RUN rm -rf /etc/nginx/html/*

COPY index.html /etc/nginx/html/index.html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

RUN echo "test"