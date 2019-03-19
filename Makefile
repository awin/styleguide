version ?= latest
all: build

build:
	docker build -t registry.zanox.com/styleguide -f docker/Dockerfile .

run:
	docker run --rm -it registry.zanox.com/styleguide bash

start: stop
	docker run -d --name styleguide \
		-p 80:80 -p 8080:8080 \
		registry.zanox.com/styleguide

stop:
	@docker rm -vf styleguide ||:

exec:
	docker exec -it styleguide bash

logs:
	docker logs -f styleguide

push:
	docker tag registry.zanox.com/styleguide registry.zanox.com/styleguide:$(version)
	docker push registry.zanox.com/styleguide:$(version)

clean:
	-rm -r node_modules public/dist public/fonts public/css public/js

rsync:
	@rsync -e "docker exec -i" --blocking-io -avz --delete \
		--no-perms --no-owner --no-group \
		--exclude-from=".dockerignore" \
		--exclude-from=".gitignore" \
		--checksum \
		--no-times \
		--itemize-changes \
		public/ styleguide:/application/public


.PHONY: all build run start stop push clean exec rsync logs
