FROM nginx

RUN apt-get update && DEBIAN_FRONTEND=noninteractive apt-get install -yqq \
    rsync && \
    apt-get clean && rm -r /var/lib/apt/lists/*

COPY public /usr/share/nginx/html
COPY docker/default.conf /etc/nginx/conf.d/default.conf
COPY docker/healthcheck.conf /etc/nginx/conf.d/
