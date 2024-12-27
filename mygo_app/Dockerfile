# Nome da Imagem a ser baixada
# Estagio inicial
FROM golang:latest AS builder
# Metadata, Informações sobre o autor
LABEL maintainer="Junior"
LABEL env="dev"

# Diretorio de trabalho
WORKDIR /app
# Copiando os arquivos do projeto
COPY . .
# Criando o executável
RUN CGO_ENABLED=0 go build -ldflags="-s -w" -o server main.go

# Criando Multistage Build
# Estagio final
FROM scratch
# Iniciando o usuário
USER 1001
# Copiando o executável
COPY --from=builder /app/server /server
# Comando de execução
ENTRYPOINT ["./server"] 