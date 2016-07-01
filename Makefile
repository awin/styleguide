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
	docker tag -f style-guide dockerhub.zanox.com:5000/styleguide:$(version)
	docker push dockerhub.zanox.com:5000/styleguide:$(version)

.PHONY: all build run start stop push exec
