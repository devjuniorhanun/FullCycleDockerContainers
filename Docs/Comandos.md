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

docker system prune

