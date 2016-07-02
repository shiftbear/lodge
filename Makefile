PHONY: help

MODULES = ./node_modules/.bin

help:
	@grep -E '^[a-zA-Z\._-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-20s\033[0m %s\n", $$1, $$2}'

setup: ## sets up project. NOTE:: "russ" needs to be installed to run tasks or use ./node_modules/.bin/russ!
	npm install
