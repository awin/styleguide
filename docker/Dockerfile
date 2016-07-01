FROM nginx

COPY public /usr/share/nginx/html
COPY docker/default.conf /etc/nginx/conf.d/default.conf
COPY docker/healthcheck.conf /etc/nginx/conf.d/
RUN rm /usr/share/nginx/html/index.html
