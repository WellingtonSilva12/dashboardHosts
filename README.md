# Monitoramento de Hosts

Este repositório contém uma aplicação **backend** e uma aplicação **frontend** que juntas permitem monitorar o status de conectividade de diferentes hosts por meio de requisições HTTP e pings.

## Tecnologias Utilizadas

### Backend
- **Node.js**
- **Express**
- **Ping** (para verificar a conectividade dos hosts)
- **CORS**
- **FS** (para manipulação de arquivos JSON)

### Frontend
- **HTML**
- **CSS**
- **Bootstrap**
- **JavaScript**

---

## Funcionalidades

### Backend
- **Rota `/hosts`**: Retorna o status (online/offline) e o tempo de resposta (*ping*) de todos os hosts configurados no arquivo `hosts.json`.
- **Rota `/ping/:host`**: Permite verificar o status de um host específico informado na URL.
### Frontend
- Exibe os hosts monitorados em uma interface amigável.
- Indica visualmente se os hosts estão online ou offline.
- Permite realizar atualizações dinâmicas ao clicar em botões ou realizar buscas específicas.

---

## Como Executar o Projeto

### Backend
1. Certifique-se de ter o [Node.js](https://nodejs.org/) instalado.
2. Clone o repositório:
   ```bash
   git clone https://github.com/WellingtonSilva12/dashboardHosts.git
   cd serverHosts
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```
4. Crie ou edite o arquivo `hosts.json` para incluir os hosts que deseja monitorar. Exemplo:
   ```json
   [
     { "networkName": "Google", "host": "www.google.com" },
     { "networkName": "Amazon", "host": "www.amazon.com" }
   ]
   ```
5. Inicie o servidor:
   ```bash
   node server.js
   ```
6. Acesse a API em `http://localhost:3838`.

### Frontend
1. Navegue até a pasta do frontend:
   ```bash
   cd hostApp
   ```
2. Certifique-se de que os arquivos HTML, CSS, Bootstrap e JavaScript estão configurados corretamente.
3. Abra o arquivo `index.html` no navegador.
4. Certifique-se de que o frontend está apontando para o backend (ex.: `http://localhost:3838`) para consumir os dados.

---
