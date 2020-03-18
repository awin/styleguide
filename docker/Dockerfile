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
RUN npm install

# Copy all sources
COPY public ./public
COPY webpack ./webpack
COPY src ./src
RUN npm run build-bootstrap
RUN npm run build-vue
RUN npm run build-vuex
RUN npm run build-moment

COPY webpack.config.js ./
COPY tslint.json ./
COPY tsconfig.json ./

RUN npm run build
RUN npm run build:nike
RUN npm run build:pntest
RUN npm run build:kerstintest


COPY src/theme-fonts/. public/theme-fonts

# Copy over webserver configuration
COPY docker/default.conf /etc/nginx/sites-available/default
COPY docker/healthcheck.conf /etc/nginx/sites-enabled/healthcheck

# Test nginx config
RUN nginx -t

EXPOSE 80
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
