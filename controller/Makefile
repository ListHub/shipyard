all: deps build

deps:
	@godep restore

clean:
	@rm -rf Godeps/_workspace controller
build:
	@godep go build .

media:
	@cd static && bower install

release: deps build
	docker build -t listhub/shipyard:$(VERSION) .
	docker push listhub/shipyard:$(VERSION)

test: clean 
	@# set the GOPATH because godep on drone does not 
	@# have the env vars injected from drone
	@# fuck computers
	@godep restore
	@export GOPATH=$GOPATH:$(pwd)/Godeps/_workspace
	@go test -v ./...

test-drone: clean 
	@# set the GOPATH because godep on drone does not 
	@# have the env vars injected from drone
	@# fuck computers
	@/var/cache/drone/bin/godep restore
	@export GOPATH=$GOPATH:$(pwd)/Godeps/_workspace
	@go test -v ./...

.PHONY: all deps build clean test test-drone release
