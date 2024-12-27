# Nome da Imagem a ser baixada
#FROM node:23-slim
FROM node:23-alpine

# Diretorio de trabalho
WORKDIR /home/node/app
# Copiando os arquivos package.json e package-lock.json
COPY package*.json .
RUN npm install

# Instanciado o usuário node
USER node
# Copiando os arquivos do projeto
COPY . .
# Verificando a integridade do container
HEALTHCHECK --interval=10s --timeout=5s --start-period=5s --retries=3 \ 
    CMD [ "curl","-f","http://localhost:3000" ] 
# Comando de execução
CMD [ "node",  "index.js" ]