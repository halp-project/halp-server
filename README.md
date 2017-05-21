# Halp Server
Halp Server.

[![Build Status](https://travis-ci.org/halp-project/halp-server.svg?branch=dev)](https://travis-ci.org/halp-project/halp-server)

## Local development
Start up your [PostgreSQL server](https://www.postgresql.org/download/) on local and configure environment variables in `[src/config.ts](https://github.com/halp-project/halp-server/blob/dev/src/config.ts)`. Then run the server on [Node 7.x](https://nodejs.org/es/) (Install it via [nvm](https://github.com/creationix/nvm)):
```sh
npm install # Install dependencies
npm run start:db # Initialize and populate database
npm run dev # Server up on http://localhost:3000 by default
```
## Documentation
- [API definition](https://github.com/halp-project/halp-server/blob/dev/API.md) - Documented endpoints.
