FROM node
MAINTAINER Yarek Tyshchenko <yarek.tyshchenko@awin.com>

RUN apt-get update && DEBIAN_FRONTEND=noninteractive \
    apt-get install -yqq nginx rsync && \
    apt-get clean && rm -r /var/lib/apt/lists/*

WORKDIR /application
RUN npm --loglevel warn install --global gulp-cli

# Install webpack requirements
COPY package.json ./
COPY .npmrc ./
RUN npm install

# Copy all sources
COPY public ./public
COPY src ./src
COPY webpack.config.js ./
COPY tslint.json ./
COPY tsconfig.json ./

RUN npm run build

# Copy over webserver configuration
COPY docker/default.conf /etc/nginx/sites-available/default
COPY docker/healthcheck.conf /etc/nginx/sites-enabled/healthcheck

# Test nginx config
RUN nginx -t

EXPOSE 80
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
