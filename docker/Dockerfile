FROM registry.zanox.com/asset-crusher

# Install gulp requirements
COPY package.json bower.json ./
RUN npm install && \
    ./node_modules/bower/bin/bower install --allow-root

# Copy all sources
COPY public ./public

# Run gulp
COPY gulpfile.js ./
RUN gulp

# Copy over webserver configuration
COPY docker/default.conf /etc/nginx/sites-available/default
COPY docker/healthcheck.conf /etc/nginx/sites-enabled/healthcheck
# Test nginx config
RUN nginx -t