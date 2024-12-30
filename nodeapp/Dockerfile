# Argumento de versão do node
ARG NODE_VERSION=23
# Nome da Imagem a ser baixada
#FROM node:${NODE_VERSION}
 FROM node:${NODE_VERSION}-alpine
# FROM node:${NODE_VERSION}-slim

# Coloca o nome de quem mantém a imagem
LABEL maintainer="Junior"

# Diretorio de trabalho
WORKDIR /app

# Copiando os arquivos package.json e package-lock.json
COPY package*.json .

# Instalando as dependências
RUN npm install

# Instanciado o usuário node
USER node

# Copiando os arquivos do projeto
COPY . .

# Verificando a integridade do container
HEALTHCHECK --interval=10s --timeout=5s --start-period=5s --retries=3 \ 
   CMD [ "curl","-f","http://localhost:3000" ] || exit 1

# Porta de execução
EXPOSE 3000

# Comando de execução
CMD [ "node",  "index.js" ]
#CMD [ "tail", "-f", "/dev/null" ]