version ?= latest
all: build

build:
	docker build -t style-guide -f docker/Dockerfile .

run:
	docker run --rm -it style-guide bash

start: stop
	docker run -d --name style-guide -p 80:80 -p 8080:8080 style-guide

stop:
	@docker rm -vf style-guide ||:

exec:
	docker exec -it style-guide bash

push:
	docker tag -f style-guide registry.zanox.com/styleguide:$(version)
	docker push registry.zanox.com/styleguide:$(version)

rsync:
	rsync -e "docker exec -i" --blocking-io -avz --delete \
		--no-perms --no-owner --no-group \
		--exclude-from=".dockerignore" \
		--exclude-from=".gitignore" \
		--checksum \
		--no-times \
		--itemize-changes \
		public/ style-guide:/usr/share/nginx/html/


.PHONY: all build run start stop push exec rsync
