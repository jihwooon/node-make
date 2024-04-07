ARCH=amd64
IMG_TAG="lts"

all:
	cat ./Makefile

test:
	npm test

node:
	npm ci
	npm run build

image: Dockerfile node 
	docker build --platform=linux/${ARCH} --tab ${IMG_TAB} .

push:
	docker push jihwooon/note-frontend:${IMG_TAG
	docker push ${IMG_TAG}

deploy: notes-fe.yaml
	kubectl apply -f notes-fe.yaml

undeploy: notes-fe.yaml
	kubectl delete -f notes-fe.yaml

clean:
	\rm –rf build
	docker rmi ${IMG_TAG}
	