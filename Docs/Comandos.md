Lista de Comandos Docker
Listar a Versão do Docker
```
docker -version
```
Listando todos os Comandos Docker
```
docker
```
Iniciando sua primeira imagem docker
```
docker run hello-world
```
Iniciando uma imagem docker
```
docker run nomeImagem
```
Lista todos os Container ativos
```
docker ps
```
Lista todos os Container ativos e inativos
```
docker ps -a 
```
Nomeando um Container
```
docker run --name nomeContainer imagemDocker
```
Parando um Container
```
docker stop nomeContainer
```
Startando um Container
```
docker start nomeContainer
```
Desatachar o Terminal de um Container
```
docker run -d nomeImagem
```
Removendo um Container
```
docker rm nomeContainer
```
Removendo todos os Container
```
docker rm $(docker ps -a -q) -f
```
Execultando Comandos no docker
```
docker exec -it nomeContainer comando
```
Criando uma nova imagem
```
docker build -t usuarioDocker/nomeImagem:VersaoImagem enderecoDockeFile
```
Iniciando Container recem criado
```
docker run -p portaHost:portaContainer imagen:tagVersão
```
Listando as Imagens Baixadas
```
docker images
```
Inspecionando Volumes
```
docker volume inspect nomeVolume
```
Inspecionando Imagens
```
docker inspect nomeImage
```
Listando as Imagens que tem no seu sistema
```
docker system df
```
Removendo todas as imagens sem Container
```
docker rmi $(docker images -a -q) -f
```
Removendo todos os Volumes
```
docker volume rm $(docker volume ls) -f
```
Removendo todas as redes
```
docker network prune
```
-------------------------Buildx----------------------------------
Listanto todos os Buildx
```
docker buildx ls
```
Criando um novo buildx
```
docker buildx create --name nomeBuildx --driver docker-container --use nomeBuildx
```
Ativando o Buildx
```
docker buildx inspect --bootstrap
```
Mudando de buildx
```
docker buildx use nomebuildx
```
Criando um novo container usando Buildx
```
docker buildx build --platform nomeDasPlataformas -t nomeImagem:VersaoContainer .
```
Subindo uma nova imagem
```
docker buildx build --platform nomeDasPlataformas -t nomeImagem:VersaoContainer . -- push
```
Cacheando Imagens usasndo docker builx
```
docker buildx build \
--cache-to type=local,dest=../docker-cache \
--cache-from type=local,src=../docker-cache \
-t nomeImagem:versaoImagem .
```
Removendo todos os cache
```
docker buildx prune
```
Removendo um buildx
```
docker buildx rm nomeBuildx
```
Listando as Redes do Docker
```
docker network ls
```
Criando uma nova Rede
```
docker network create nomeRede
```
Criando um Container com Rede
```
docker run -d --name web --network nomerede nomeImage
```

docker system prune

