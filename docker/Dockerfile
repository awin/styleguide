FROM node
MAINTAINER Fabiana Faria <fabiana.faria@awin.com>
LABEL "com.awin.app.owner"="global-ui@awin.com"

RUN apt-get update && DEBIAN_FRONTEND=noninteractive \
    apt-get install -yqq nginx rsync && \
    apt-get clean && rm -r /var/lib/apt/lists/*

WORKDIR /application

# Install webpack requirements
COPY package.json ./
COPY .npmrc ./
RUN yarn

# Copy all sources
COPY public ./public
COPY webpack ./webpack
COPY src ./src
RUN yarn run build-bootstrap
RUN yarn run build-vue
RUN yarn run build-vuex
RUN yarn run build-moment
RUN yarn run build-select2

COPY webpack.config.js ./
COPY tslint.json ./
COPY tsconfig.json ./

RUN yarn run build
RUN yarn run build:etsypn
RUN yarn run build:nikepartners
RUN yarn run build:nikevip
RUN yarn run build:pntest
RUN yarn run build:kerstintest
RUN yarn run build:noreportingtest


COPY src/theme-fonts/. public/theme-fonts

# Copy over webserver configuration
COPY docker/default.conf /etc/nginx/sites-available/default
COPY docker/mime.types /etc/nginx/
COPY docker/healthcheck.conf /etc/nginx/sites-enabled/healthcheck

# Test nginx config
RUN nginx -t

EXPOSE 80
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
