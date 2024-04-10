ARCH=amd64
IMG_REGISTRY=180993267331.dkr.ecr.ap-northeast-2.amazonaws.com
IMG_NAME=jihwooon-fe
IMG_TAG=${IMG_REGISTRY}/${IMG_NAME}:latest

all:
	cat ./Makefile

test:
	npm test

node:
	npm ci
	npm run build

image: Dockerfile node 
	docker build --platform=linux/${ARCH} --tag ${IMG_NAME} .

deploy: notes-fe.yaml
	kubectl apply -f notes-fe.yaml

undeploy: notes-fe.yaml
	kubectl delete -f notes-fe.yaml

clean:
	\rm -rf build
	docker rmi ${IMG_TAG}
push: image
	aws ecr get-login-password --region ap-northeast-2 | docker login --username AWS --password-stdin ${IMG_REGISTRY}
	docker tag ${IMG_NAME}:latest ${IMG_TAG}
	docker push ${IMG_TAG}