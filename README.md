# 🤖 Aplicação com IA Generativa — React + Node.js + Gemini API

Projeto desenvolvido para demonstrar, passo a passo, como adicionar **Inteligência Artificial Generativa a uma aplicação web tradicional** utilizando **React, Node.js, Express e Gemini API**.

A proposta não é substituir a programação pela IA.

A ideia é mostrar como uma aplicação que já possui frontend, backend, rotas e regras de negócio pode evoluir e passar a utilizar um modelo de IA para resolver problemas específicos.

> **Uma aplicação. Várias evoluções. Cada nova tecnologia entrando para resolver um novo problema.**

---

## 🎯 Objetivo do projeto

O projeto parte de uma aplicação de cadastro de produtos construída com:

- React
- Node.js
- Express
- JavaScript
- API REST

A partir dessa base, novas funcionalidades de Inteligência Artificial são adicionadas progressivamente.

Na **Parte 02**, adicionamos uma funcionalidade capaz de gerar automaticamente a descrição de um produto utilizando a **Gemini API**.

O fluxo passa a ser:

```text
React
  ↓
Node.js / Express
  ↓
Gemini API
  ↓
Node.js / Express
  ↓
React
```

O frontend não acessa diretamente a Gemini API.

A comunicação com a IA acontece através do backend da aplicação.

---

# 📚 Evolução do projeto

## Parte 01 — Projeto base

Construção da aplicação tradicional utilizando:

- React no frontend;
- Node.js no backend;
- Express;
- API REST;
- CRUD de produtos;
- comunicação entre frontend e backend.

Nesta etapa ainda não existe Inteligência Artificial.

Ela representa a aplicação que posteriormente será evoluída.

---

## Parte 02 — Integração com Gemini API

Nesta etapa adicionamos **IA Generativa ao projeto existente**.

A aplicação passa a permitir que o usuário informe os dados de um produto e utilize a IA para gerar automaticamente sua descrição.

### Funcionalidades implementadas

- integração com Gemini API;
- SDK `@google/genai`;
- variável de ambiente `GEMINI_API_KEY`;
- controller específico para IA;
- criação do prompt;
- chamada ao modelo Gemini;
- `async/await`;
- rota específica para geração;
- integração da rota com Express;
- comunicação React → Node.js → Gemini;
- botão **Gerar com IA**;
- estado de loading;
- tratamento de erros;
- tratamento do erro `429`;
- tratamento de erros internos;
- depuração de erro `500`;
- retorno da resposta para o frontend;
- preenchimento da descrição gerada pela IA.

---

# 🎥 Vídeo da Parte 02

A implementação completa da integração com IA está disponível no canal **Desvendando o Código**.

## Como Colocar IA no Seu Projeto React + Node.js | Gemini API

▶️ **Assista ao vídeo:**

https://www.youtube.com/watch?v=uugS_fMMMG4

No vídeo são abordados conceitos importantes antes da implementação, incluindo:

- IA Generativa;
- LLM;
- prompts;
- tokens;
- API Key;
- Gemini API;
- SDK `@google/genai`;
- integração frontend/backend;
- controllers;
- rotas;
- tratamento de erros;
- limites da API;
- erro `429`;
- erro `500`;
- depuração de problemas reais durante a integração.

---

# 🧠 Arquitetura da integração com IA

A aplicação utiliza o backend como intermediário entre o frontend e o serviço de IA.

```text
┌──────────────┐
│    React     │
│   Frontend   │
└──────┬───────┘
       │
       │ HTTP
       ↓
┌──────────────┐
│   Node.js    │
│   Express    │
│   Backend    │
└──────┬───────┘
       │
       │ Gemini SDK
       ↓
┌──────────────┐
│  Gemini API  │
│      IA      │
└──────┬───────┘
       │
       ↓
┌──────────────┐
│   Node.js    │
│   Express    │
└──────┬───────┘
       │
       ↓
┌──────────────┐
│    React     │
│  Descrição   │
└──────────────┘
```

Essa arquitetura evita colocar a **API Key da Gemini diretamente no frontend**.

---

# 🔐 Variáveis de ambiente

A chave da Gemini API deve ficar armazenada no arquivo `.env` do backend.

Exemplo:

```env
GEMINI_API_KEY=SUA_CHAVE_AQUI
```

⚠️ **Nunca publique sua API Key no GitHub.**

O arquivo `.env` deve estar incluído no `.gitignore`.

Exemplo:

```gitignore
node_modules/
.env
```

---

# 📦 Gemini SDK

Para realizar a integração utilizamos o SDK:

```bash
npm install @google/genai
```

Importação:

```javascript
import { GoogleGenAI } from "@google/genai";
```

A chave é recuperada através das variáveis de ambiente:

```javascript
process.env.GEMINI_API_KEY
```

---

# 🧠 Prompt

O backend é responsável por montar o prompt enviado ao modelo.

A aplicação utiliza as informações do produto para fornecer contexto à IA.

Fluxo simplificado:

```text
Dados do produto
      ↓
Construção do prompt
      ↓
Gemini API
      ↓
Descrição gerada
      ↓
Backend
      ↓
Frontend
```

Isso permite que a IA seja utilizada como **uma funcionalidade dentro da aplicação**, e não como substituta da lógica do sistema.

---

# ⚠️ Tratamento de erros

Uma integração com serviços externos precisa considerar situações em que a API pode falhar.

Durante o projeto são tratados diferentes tipos de erro.

### 400

Problemas relacionados aos dados enviados pela aplicação.

### 429

Limite de requisições da API atingido.

```text
Too Many Requests
```

Esse erro pode ocorrer quando o limite disponível para utilização do modelo é excedido.

### 500

Erro interno da aplicação.

Durante o desenvolvimento da Parte 02 ocorreu um erro `500` real.

O problema foi investigado utilizando:

```text
problema
↓
hipótese
↓
console / logs
↓
teste
↓
erro
↓
investigação
↓
correção
↓
novo teste
```

A depuração faz parte do processo de desenvolvimento e foi mantida no vídeo justamente para demonstrar como investigar esse tipo de problema.

### 502

Pode ser utilizado quando o backend encontra problemas ao se comunicar com um serviço externo.

---

# ▶️ Executando o projeto

Clone o repositório:

```bash
git clone https://github.com/marcoscaldas/aplicacao-ia-generativa-react-node.git
```

Entre na pasta do projeto:

```bash
cd aplicacao-ia-generativa-react-node
```

Instale as dependências necessárias.

No backend:

```bash
npm install
```

No frontend:

```bash
npm install
```

Configure a variável:

```env
GEMINI_API_KEY=SUA_CHAVE_AQUI
```

Depois execute o backend e o frontend conforme a estrutura do projeto.

---

# 🛡️ Segurança

Alguns cuidados importantes ao trabalhar com APIs de Inteligência Artificial:

- nunca colocar API Keys diretamente no frontend;
- nunca publicar `.env`;
- validar os dados recebidos;
- tratar falhas da API externa;
- tratar limites de requisição;
- registrar erros importantes;
- evitar retornar informações internas do servidor ao usuário.

A IA deve ser tratada como qualquer outro **serviço externo consumido pela aplicação**.

---

# 🔮 Parte 03 — Resposta estruturada com JSON

Atualmente o projeto solicita à IA principalmente uma descrição em texto.

Exemplo:

```text
Gemini → descrição
```

Na próxima evolução, a aplicação poderá solicitar vários dados estruturados.

Exemplo:

```json
{
  "descricao": "Mouse gamer desenvolvido para...",
  "categoria": "Periféricos",
  "tags": [
    "gamer",
    "computador",
    "periférico"
  ],
  "resumo": "Mouse gamer com foco em precisão e desempenho."
}
```

Isso abre um novo problema:

> **Hoje a IA devolve um texto. Mas e se a aplicação precisar receber vários dados separados e utilizar cada informação no sistema?**

A partir daí podemos trabalhar com **respostas estruturadas em JSON**.

---

# 🗺️ Roadmap

A evolução planejada do projeto inclui:

```text
Aplicação tradicional
        ↓
Gemini API
        ↓
Prompt
        ↓
Resposta em texto
        ↓
JSON estruturado
        ↓
Validação
        ↓
Retry / Timeout
        ↓
Logs
        ↓
Testes
        ↓
Persistência
        ↓
RAG
        ↓
Embeddings
        ↓
Busca semântica
        ↓
Banco vetorial
        ↓
Agentes / Tools
        ↓
Segurança e autenticação
```

A ideia é introduzir cada conceito quando surgir **um problema que justifique sua utilização**.

---

# 🛠️ Tecnologias

- JavaScript
- React
- Node.js
- Express
- API REST
- Gemini API
- Google GenAI SDK
- IA Generativa
- LLM
- Git
- GitHub

---

# 📺 Desvendando o Código

Este projeto faz parte dos conteúdos produzidos pelo **Desvendando o Código**, com foco em desenvolvimento de software através de projetos e problemas reais.

A proposta é não apenas mostrar código pronto, mas trabalhar o processo:

```text
PROBLEMA
   ↓
IDENTIFICAR O QUE PRECISAMOS
   ↓
ESCOLHER OS CONCEITOS E SINTAXES
   ↓
ESCREVER
   ↓
TESTAR
   ↓
ENCONTRAR ERROS
   ↓
CORRIGIR
   ↓
ENTENDER POR QUE FUNCIONOU
```

🎥 **Vídeo da integração com IA:**

https://www.youtube.com/watch?v=uugS_fMMMG4

---

## 👨‍💻 Autor

**Professor Marcos**

Desvendando o Código®

Conteúdo sobre:

- JavaScript;
- React;
- Node.js;
- APIs REST;
- desenvolvimento web;
- Inteligência Artificial aplicada ao desenvolvimento de software.

---

## 📌 Status do projeto

```text
Parte 01 — CRUD React + Node.js + Express       ✅
Parte 02 — Integração com Gemini API            ✅
Parte 03 — Resposta estruturada com JSON        🔜
```

**Projeto em evolução.**