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

push:
	docker push jihwooon/note-backend:${IMG_TAG}

deploy: notes-be.yaml
	kubectl apply -f notes-be.yaml

undeploy:
	kubectl delete -f notes-be.yaml

clean:
	\rm -rf build
	docker rmi ${IMG_TAG}
