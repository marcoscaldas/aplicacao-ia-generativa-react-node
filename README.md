# 🚀 Catálogo de Produtos — React + Node.js + Express

Projeto base utilizado na série de evolução de uma aplicação web com **Inteligência Artificial** no canal **Desvendando o Código**.

A aplicação foi desenvolvida utilizando **React no frontend** e **Node.js + Express no backend**, seguindo uma arquitetura baseada em **API REST**.

A partir deste projeto base, novas funcionalidades serão implementadas progressivamente, incluindo recursos de **Inteligência Artificial Generativa**.

---

# 📺 De onde veio este projeto?

Este projeto não começa do zero.

A base utilizada neste repositório foi desenvolvida passo a passo anteriormente no canal **Desvendando o Código**, na live:

## CRUD Completo com React, Node.js e Express | Editar e Excluir na API REST

▶️ **Assista à live completa:**

https://www.youtube.com/live/zGBoDvgfDp4

Nessa aula você encontra o passo a passo da construção da aplicação utilizada como base para esta nova sequência.

Se você ainda não conhece o projeto ou deseja entender como o **CRUD com React, Node.js e Express** foi desenvolvido, recomendo começar por essa live.

---

# 🎯 Objetivo do projeto

A proposta é partir de uma aplicação web tradicional já funcionando e evoluí-la progressivamente com novas tecnologias.

Em vez de criar um novo projeto para cada conceito estudado, utilizaremos a mesma aplicação como laboratório para novas implementações.

Inicialmente temos:

```text
React
   ↓
Node.js + Express
   ↓
API REST
   ↓
CRUD de Produtos
```

Nas próximas etapas, adicionaremos recursos de Inteligência Artificial à aplicação.

---

# 🛒 Projeto Base — Catálogo de Produtos

Antes da integração com Inteligência Artificial, a aplicação já possui funcionalidades como:

- cadastro de produtos;
- listagem de produtos;
- busca de produtos;
- edição de produtos;
- exclusão de produtos;
- formulário de produtos;
- comunicação entre React e Node.js;
- API REST desenvolvida com Express.

Os produtos possuem informações como:

- nome;
- descrição;
- preço.

Nesta versão inicial do projeto, os dados são mantidos **em memória**.

O objetivo desta base não é trabalhar persistência em banco de dados, mas fornecer uma aplicação funcional para que possamos concentrar os estudos nas próximas implementações.

---

# 🧰 Tecnologias utilizadas

## Frontend

- React
- JavaScript
- HTML
- CSS

## Backend

- Node.js
- Express

## Arquitetura

- API REST
- comunicação HTTP;
- JSON;
- separação entre frontend e backend.

---

# 📂 Estrutura geral do projeto

A aplicação está dividida em duas partes principais:

```text
projeto/
│
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── routes/
│   │   └── app.js
│   │
│   └── package.json
│
└── frontend/
    ├── src/
    └── package.json
```

O **frontend React** é responsável pela interface com o usuário.

O **backend Node.js + Express** é responsável pelas regras da aplicação e pela disponibilização da API REST.

---

# ▶️ Como executar o projeto

## 1. Clone o repositório

```bash
git clone URL_DO_REPOSITORIO
```

Depois entre na pasta do projeto.

---

## 2. Backend

Entre na pasta do backend:

```bash
cd backend
```

Instale as dependências:

```bash
npm install
```

Execute o backend:

```bash
npm start
```

O servidor será iniciado de acordo com a configuração existente no projeto.

---

## 3. Frontend

Abra outro terminal e entre na pasta do frontend:

```bash
cd frontend
```

Instale as dependências:

```bash
npm install
```

Execute o projeto:

```bash
npm run dev
```

Depois acesse no navegador o endereço informado pelo ambiente de desenvolvimento.

---

# 🧠 Próxima evolução — Inteligência Artificial

Este projeto será utilizado como base para uma nova sequência de estudos envolvendo **Inteligência Artificial Generativa aplicada ao desenvolvimento de software**.

Nossa primeira evolução será adicionar uma funcionalidade capaz de gerar automaticamente a descrição de um produto utilizando IA.

A ideia será transformar este fluxo:

```text
React
   ↓
Node.js + Express
   ↓
CRUD
```

em:

```text
React
   ↓
Node.js + Express
   ↓
Gemini API
   ↓
Modelo de IA
   ↓
Node.js
   ↓
React
```

O usuário informará dados do produto e poderá solicitar que a Inteligência Artificial gere uma descrição automaticamente.

---

# 🤖 Implementação 01 — Integração com IA Generativa

Na primeira evolução deste projeto, estudaremos como integrar uma aplicação existente com um modelo de Inteligência Artificial.

Durante essa implementação serão abordados conceitos como:

- Inteligência Artificial Generativa;
- LLM — Large Language Model;
- modelos de IA;
- prompts;
- tokens;
- APIs;
- API Key;
- SDK;
- variáveis de ambiente;
- integração com Gemini API;
- comunicação entre React e Node.js;
- programação assíncrona;
- tratamento de erros;
- limites de utilização de APIs;
- erro HTTP 429.

O objetivo não será apenas fazer a IA responder.

Vamos entender **como uma funcionalidade de IA pode fazer parte da arquitetura de uma aplicação real**.

---

# 🔑 API Key e variáveis de ambiente

Nas versões que utilizarem serviços externos de Inteligência Artificial, as chaves de acesso deverão permanecer no **backend**.

Nunca coloque uma API Key diretamente no frontend.

A chave poderá ser armazenada em um arquivo `.env`.

Exemplo:

```env
GEMINI_API_KEY=sua_chave_aqui
```

O arquivo `.env` não deve ser enviado para o GitHub.

Certifique-se de que ele esteja incluído no arquivo:

```text
.gitignore
```

Uma alternativa é disponibilizar no repositório um arquivo:

```text
.env.example
```

contendo apenas:

```env
GEMINI_API_KEY=
```

Assim, quem utilizar o projeto saberá qual variável precisa configurar sem que nenhuma chave real seja publicada.

---

# 🗺️ Evolução do projeto

A ideia é evoluir a mesma aplicação progressivamente.

```text
PROJETO BASE
React + Node.js + Express + CRUD
        ↓
IMPLEMENTAÇÃO 01
Integração com LLM
        ↓
IMPLEMENTAÇÃO 02
Respostas estruturadas
        ↓
Validação dos dados
        ↓
Tratamento de falhas
        ↓
Logs e testes
        ↓
RAG
        ↓
Embeddings
        ↓
Busca semântica
        ↓
Agentes
```

Cada etapa será introduzida quando surgir um problema ou uma necessidade que justifique a utilização da nova tecnologia.

---

# 📚 Metodologia

A evolução do projeto seguirá uma abordagem baseada em resolução de problemas.

```text
PROBLEMA
   ↓
O que precisamos?
   ↓
Conceitos e tecnologias
   ↓
Implementação
   ↓
Teste
   ↓
Erros e problemas
   ↓
Correção
   ↓
Por que funciona?
```

A proposta é não utilizar uma tecnologia apenas porque ela existe.

Primeiro identificamos o problema.

Depois entendemos **qual tecnologia pode ajudar a resolvê-lo e por quê**.

---

# 💡 Por que utilizar o mesmo projeto?

Ao invés de criar pequenos exemplos desconectados para cada assunto, este projeto será evoluído ao longo dos estudos.

Isso permite acompanhar como uma aplicação tradicional pode ganhar novas capacidades progressivamente.

Começamos com:

```text
React
+
Node.js
+
Express
+
API REST
+
CRUD
```

e adicionaremos novos recursos à medida que avançarmos.

Dessa forma, será possível acompanhar não apenas códigos isolados, mas também a **evolução da arquitetura da aplicação**.

---

# 🏷️ Versões do projeto

A ideia é preservar diferentes estágios da aplicação.

Exemplo:

```text
v0-base
│
│  React + Node.js + Express + CRUD
│
▼
v1-gemini
│
│  Integração inicial com Gemini API
│
▼
v2-json
│
│  Respostas estruturadas
│
▼
v3-robustez
│
│  Tratamento de falhas, timeout e retry
│
▼
...
```

Assim será possível consultar tanto o **projeto inicial** quanto as diferentes etapas de evolução.

---

# ⚠️ Importante

Nunca publique:

- API Keys;
- senhas;
- tokens de acesso;
- credenciais;
- arquivos `.env` contendo informações reais.

Antes de realizar um commit, sempre verifique quais arquivos estão sendo enviados para o repositório.

---

# 📺 Acompanhe a evolução

Este projeto faz parte dos conteúdos publicados no canal:

## Desvendando o Código

A proposta é estudar programação através da construção de projetos e da resolução de problemas reais.

O projeto será atualizado conforme novas implementações forem desenvolvidas nas aulas e lives.

---

# 👨‍🏫 Professor Marcos

**Desvendando o Código**

Programação, desenvolvimento web, APIs, JavaScript, Node.js, React e Inteligência Artificial aplicada ao desenvolvimento de software.

---

## 📌 Comece pela base

Se você ainda não acompanhou a construção deste projeto, assista primeiro:

### CRUD Completo com React, Node.js e Express | Editar e Excluir na API REST

https://www.youtube.com/live/zGBoDvgfDp4

Depois disso, acompanhe as próximas implementações e veja o projeto evoluir passo a passo.