usei um docker com o postgresdb https://www.docker.com/

docker pull postgres docker run --name postgresdb -e POSTGRES_PASSWORD=postgresdb -p 5432:5432 -d postgres

usei o insomnia para o teste de api https://insomnia.rest/download

esta nesse arquivo Insomnia_teste_mitapi.json

para iniciar pode usar o

node server.js ou yarn start