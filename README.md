# heard_backend app


### Run the app in terminal

1. Start a Postgres database server on your machine or in the cloud.
2. Set the following environment variables in your .env file

```
//DB CRED
POSTGRES_HOST=<some-value>
POSTGRES_PORT=<some-value>
POSTGRES_DB=<some-value>
POSTGRES_USER=<some-value>
POSTGRES_PASSWORD=<some-value>
DB_DIALECT=<some-value>

//JWT CRED
JWT_SECRET=<some-value>

//SPOTIFY CRED
SPOTIFY_CLIENT_ID=<some-value>
SPOTIFY_CLIENT_SECRET=<some-value>

```

3. Install packages and start the application server.

```
$ npm install
$ npm start
```

### Run the app inside a Docker container

Build the docker container and get it up and running.

```
$ docker-compose build
$ docker-compose up
```

### Make API calls against the server

1. Go to [http://localhost:8000/swagger](http://localhost:8000/swagger) to see Swagger documentation for API endpoints.
2. Run the APIs by clicking the "Try it now" button on the Swagger page.

### Run admin bro dashboard

Go to [http://localhost:8000/admin](http://localhost:8000/admin)

### Run tests and check code coverage

```
$ npm test
$ npm coverage
```

### Lint your code

```
$ npm lint
$ npm format
```

### Learn More

1. Learn more about:

- the [Node architecture choices](https://imagine.ai/docs/architecture-node) used.
- the [best practices](https://imagine.ai/docs/best-practices) followed.

2. Imagine is in beta - here are the [known issues](https://imagine.ai/docs/known_issues) that we are working to fix.
