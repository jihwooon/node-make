ARCH=amd64
IMG_TAG="lts"

all:
	cat ./Makefile

test:
	npm test

node:
	npm ci
	npm run build

image: Dockerfile node docker build --platform=linux/${ARCH} --tab ${IMG_TAB} .

