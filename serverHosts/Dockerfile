# Use uma imagem oficial do Node.js
FROM node:18-alpine

# Defina o diretório de trabalho dentro do container
WORKDIR /app

# Copie o package.json e o package-lock.json para o container
COPY package*.json ./

# Instale as dependências do projeto
RUN npm install

# Copie todo o código para o container
COPY . .

# Exponha a porta que o servidor irá escutar
EXPOSE 3030

# Comando para rodar a aplicação
CMD ["node", "server.js"]
