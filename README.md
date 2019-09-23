<h1 align="center">
    <img alt="Icons made by Freepik" src="https://image.flaticon.com/icons/svg/688/688444.svg" height="124" width="124">
    <br>
    States API
</h1>

This simple API consumes data from IBGE API and return formatted information about Brazilian states, using NodeJS and Express.

It Redis for caching. 

Each service runs in a separated container and they all comunicate through a network (meetapp_network) created with docker-compose, that is being used to orchestrate the containers creation.

This repository contains two different servers, in order to show how both APIs can communicate through Docker network.

## :rocket: Installation

Clone the repository:

```bash
git clone https://github.com/giovanniantonaccio/states-api.git
```

Rename `.env.example` to `.env` (Don't need to fill DB info, we are not using). Redis is configured based on docker-compose information.

Build the container images

```bash
docker-compose build
```

Now you only need to run the applications:

```bash
docker-compose up -d
```

## :books: Technologies

This project was developed with the following technologies:

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [nodemon](https://nodemon.io/)
- [Sucrase](https://github.com/alangpierce/sucrase)
- [Docker](https://www.docker.com/docker-community)
- [Redis](https://redis.io/)
- [Ioredis](https://github.com/luin/ioredis)
- [DotEnv](https://www.npmjs.com/package/dotenv)
- [VS Code](https://code.visualstudio.com/) with [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

## :memo: License

This project is under the MIT license. See the [LICENSE](https://github.com/giovanniantonaccio/states-api/blob/master/LICENSE) for more information.

---

Made by Giovanni Antonaccio :wave: [Get in touch!](https://www.linkedin.com/in/giovanniantonaccio/)
