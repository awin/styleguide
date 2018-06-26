FROM node
MAINTAINER Fabiana Faria <fabiana.faria@awin.com>

RUN apt-get update && DEBIAN_FRONTEND=noninteractive \
    apt-get install -yqq nginx rsync && \
    apt-get clean && rm -r /var/lib/apt/lists/*

WORKDIR /application
RUN npm --loglevel warn install --global gulp-cli

# Install gulp requirements
COPY package.json bower.json ./
RUN npm install && \
    ./node_modules/bower/bin/bower install --allow-root

# Copy all sources
COPY public ./public
COPY webpack ./webpack
COPY src ./src
COPY gulpfile.js ./
COPY tsconfig.json ./

RUN gulp
RUN npm run build-bootstrap
RUN npm run build-vue
RUN npm run build-vuex
RUN npm run build-moment

# Copy over webserver configuration
COPY docker/default.conf /etc/nginx/sites-available/default
COPY docker/healthcheck.conf /etc/nginx/sites-enabled/healthcheck

# Test nginx config
RUN nginx -t

EXPOSE 80
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
