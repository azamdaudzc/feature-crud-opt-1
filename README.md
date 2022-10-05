## Description

Feature CRUD with TypeORM implementation

## Installation

```bash
$ npm install
```
## Setup Database with PostgreSQL Client

# Production Database
1. Create database crudfeatureOne
2. Set user=postgres
3. Set password=crud123
4. set port 5432
# Testing Database
1. Create database crudfeatureOneTest
2. Set user=postgres
3. Set password=crud123
4. set port 5433

## Setup Database with Docker

1. Install docker client and run docker
2. create docker-compose.yml
3. add following code
```bash
version: '3.8'
services:
  dev-db:
    image: postgres:13
    ports:
      - 5432:5432
    environment:
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: crud123
      POSTGRES_DB: crudFeatureOne
    networks:
      - devnetwork
  test-db:
    image: postgres:13
    ports:
      - 5433:5432
    environment:
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: crud123
      POSTGRES_DB: crudFeatureOneTest
    networks:
      - devnetwork
networks:
  devnetwork:
```
4. Run in command line
```bash
$ docker compose up dev-db -d

$ docker compose up test-db -d
```
## Migrate Database
```bash
$ npx prisma migrate deploy
```
## Seeding Database

```bash
$ npx prisma db seed
```

## Running the app

```bash
# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# e2e tests
$ npm run test:e2e
```

## View on swagger

http://localhost:3000/api/