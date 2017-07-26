FROM registry.zanox.com/asset-crusher

# Install gulp requirements
COPY package.json ./
RUN npm install

# Copy all sources
COPY public ./public
COPY src ./src

# Run gulp
COPY gulpfile.js ./
RUN gulp

# Copy over webserver configuration
COPY docker/default.conf /etc/nginx/sites-available/default
COPY docker/healthcheck.conf /etc/nginx/sites-enabled/healthcheck
# Test nginx config
RUN nginx -t