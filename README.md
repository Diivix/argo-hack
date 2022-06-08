# Argo Hack

Sample app for a blue/green environment demo.

## Run locally

```bash
npm start
```

## Deploying on Docker Locally

### Build and start

``` bash
docker build -t argohack .
docker container create --name argohack -p 80:80 argohack
docker container start argohack
```

### Stop and Remove Container

```bash
docker container stop argohack
docker container rm argohack
docker image rm argohack
```
