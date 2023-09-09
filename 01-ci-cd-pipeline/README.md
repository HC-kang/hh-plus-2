# 01-ci-cd-pipeline

## how to run in local

```bash
cp .env.example .env

docker-compose up postgres

npm ci
npm run start:dev

npm run test
npm run test:e2e # if it pass, the health check is ok
```

## health check

```bash
curl --location 'http://localhost:3000/health-check'
```
