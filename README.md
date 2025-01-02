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
