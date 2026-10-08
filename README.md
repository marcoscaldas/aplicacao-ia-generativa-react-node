# 🤖 Aplicação com IA Generativa — React + Node.js + Gemini API + MongoDB

Projeto desenvolvido para demonstrar, passo a passo, como adicionar **Inteligência Artificial Generativa a uma aplicação web tradicional**, utilizando **React, Node.js, Express, Gemini API, MongoDB e Mongoose**.

A proposta não é substituir a programação pela IA.

A ideia é mostrar como uma aplicação que já possui frontend, backend, rotas e regras de negócio pode evoluir, utilizando um modelo de IA para resolver problemas específicos e armazenando os resultados em um banco de dados.

> **Uma aplicação. Várias evoluções. Cada nova tecnologia entrando para resolver um novo problema.**

---

## 🎯 Objetivo do projeto

O projeto parte de uma aplicação de cadastro de produtos construída com React, Node.js, Express, JavaScript e API REST.

A partir dessa base, novas funcionalidades são adicionadas progressivamente:

- Integração com a Gemini API.
- Geração automática de informações de produtos.
- Respostas estruturadas em JSON.
- Validação e tratamento dos dados no backend.
- Integração dos dados gerados pela IA no React.
- Persistência de produtos no MongoDB com Mongoose.
- Operações de CRUD utilizando um banco de dados real.

A aplicação utiliza a IA **dentro do projeto**, e não para substituir o desenvolvimento do projeto.

---

# 📚 Evolução do projeto

## Parte 01 — Projeto base

Construção da aplicação tradicional utilizando:

- React no frontend;
- Node.js no backend;
- Express;
- API REST;
- CRUD de produtos;
- comunicação entre frontend e backend;
- armazenamento inicial dos produtos em memória.

Nesta etapa ainda não existe Inteligência Artificial.

A aplicação serve como base para as evoluções seguintes.

---

## Parte 02 — Integração com Gemini API

Nesta etapa adicionamos **IA Generativa ao projeto existente**.

A aplicação passa a permitir que o usuário informe os dados de um produto e utilize a IA para gerar automaticamente sua descrição.

### Funcionalidades implementadas

- Integração com Gemini API.
- SDK `@google/genai`.
- Variável de ambiente `GEMINI_API_KEY`.
- Controller específico para IA.
- Construção de prompts.
- Chamada ao modelo Gemini.
- `async/await`.
- Rota específica para geração de descrição.
- Comunicação React → Node.js → Gemini.
- Botão **Gerar com IA**.
- Estado de loading.
- Tratamento de erros.
- Investigação de erros `429` e `500`.
- Retorno da resposta ao frontend.
- Preenchimento da descrição gerada pela IA.

### 🎥 Vídeo da Parte 02

**Como Colocar IA no Seu Projeto React + Node.js | Gemini API**

https://www.youtube.com/watch?v=uugS_fMMMG4

---

## Parte 03 — Structured Outputs: respostas estruturadas com JSON

Na Parte 02, a IA retornava principalmente uma descrição em texto.

Nesta evolução, passamos a solicitar uma resposta estruturada, contendo várias informações sobre o produto.

Exemplo:

```json
{
  "descricao": "Mouse gamer desenvolvido para oferecer precisão e desempenho.",
  "categoria": "Periféricos",
  "tags": [
    "gamer",
    "computador",
    "periférico"
  ],
  "resumo": "Mouse gamer com foco em precisão e desempenho."
}
```

### Funcionalidades implementadas

- Utilização de Structured Outputs com Gemini.
- Definição de um Schema para a resposta.
- Uso de `Type` do SDK `@google/genai`.
- Organização dos dados em JSON.
- Tratamento da resposta retornada pela IA.
- Validação e sanitização dos dados no backend.
- Tratamento de campos e arrays.
- Uso de `try/catch`.
- Testes da resposta estruturada com Thunder Client.

### Conceito importante

**A IA gerar um JSON não significa que os dados devem ser utilizados sem validação.**

O backend continua responsável por verificar e tratar as informações antes de enviá-las ao restante da aplicação.

---

## Parte 04 — Integração dos dados estruturados no React

Com o backend retornando descrição, categoria, tags e resumo, a próxima etapa foi adaptar o frontend para trabalhar com essas informações.

### Funcionalidades implementadas

- Consumo da resposta estruturada no React.
- Criação de estados com `useState`.
- Estado para categoria.
- Estado para tags.
- Estado para resumo.
- Atualização dos dados após a resposta da IA.
- Inputs controlados.
- Renderização de arrays com `map()`.
- Renderização condicional com `&&`.
- Verificação com `tags.length`.
- Uso de `key` nos elementos da lista.
- Limpeza dos campos do formulário.
- Tratamento do estado de loading.
- Uso de `setTimeout` para remover mensagens da interface.
- Testes incrementais da integração.

### Conceito importante

Nesta etapa, os dados gerados pela IA passaram a aparecer na interface, mas isso ainda não significava que estavam armazenados permanentemente.

**Estado do React não é persistência de dados.**

Essa limitação motivou a próxima evolução do projeto.

---

## Parte 05 — Persistência com MongoDB e Mongoose

Nesta etapa substituímos o armazenamento em memória pela persistência de dados em MongoDB.

O backend passa a utilizar Mongoose para conectar ao banco, definir o modelo de Produto e executar as operações do CRUD.

### Funcionalidades implementadas

- Instalação e utilização do Mongoose.
- Conexão do Node.js com MongoDB.
- Configuração da variável `MONGODB_URI`.
- Criação do módulo de conexão com o banco.
- Uso de `mongoose.connect()`.
- Criação do Schema de Produto.
- Criação do Model de Produto.
- Configuração de tipos e validações.
- Campos `nome`, `descricao`, `categoria`, `tags`, `resumo` e `preco`.
- Configuração de `timestamps`.
- Refatoração do controller de produtos.
- Listagem utilizando `Produto.find()`.
- Ordenação utilizando `sort()`.
- Cadastro utilizando `Produto.create()`.
- Atualização utilizando `Produto.findByIdAndUpdate()`.
- Exclusão utilizando `Produto.findByIdAndDelete()`.
- Utilização do identificador `_id` do MongoDB.
- Tratamento de erros com `try/catch`.
- Testes com Thunder Client.
- Visualização dos registros no MongoDB Compass.

### 🎥 Vídeo da Parte 05

**MongoDB + Node.js na Prática: CRUD com Mongoose e Persistência de Dados**

https://youtube.com/live/l564BLVvWa4

### O que mudou?

Antes:

```text
React
  ↓
Node.js / Express
  ↓
Array em memória
```

Agora:

```text
React
  ↓
Node.js / Express
  ↓
Mongoose
  ↓
MongoDB
```

Os produtos deixam de depender exclusivamente da memória do servidor e passam a ser armazenados no banco de dados.

**Importante:** nesta etapa, o foco foi o backend. A integração completa do frontend React com o CRUD persistido no MongoDB fica para a próxima evolução.

---

# 🧠 Arquitetura da aplicação

A aplicação possui dois fluxos principais.

## 1. Geração de informações com IA

```text
┌───────────────────┐
│       React       │
│     Frontend      │
└─────────┬─────────┘
          │ HTTP
          ▼
┌───────────────────┐
│ Node.js / Express │
│    IA Controller  │
└─────────┬─────────┘
          │ Gemini SDK
          ▼
┌───────────────────┐
│    Gemini API     │
│        LLM        │
└─────────┬─────────┘
          │ JSON estruturado
          ▼
┌───────────────────┐
│      Backend      │
│ Validação e dados │
└─────────┬─────────┘
          │
          ▼
┌───────────────────┐
│       React       │
│ Descrição / Tags  │
│ Categoria / Resumo│
└───────────────────┘
```

O frontend não acessa diretamente a Gemini API.

A comunicação com a IA acontece através do backend da aplicação.

## 2. Persistência dos produtos

```text
┌───────────────────┐
│   Cliente HTTP    │
│   Thunder Client  │
└─────────┬─────────┘
          │
          ▼
┌───────────────────┐
│ Node.js / Express │
│       Rotas       │
└─────────┬─────────┘
          │
          ▼
┌───────────────────┐
│ Produto Controller│
│   Regras da API   │
└─────────┬─────────┘
          │
          ▼
┌───────────────────┐
│     Mongoose      │
│   Model Produto   │
└─────────┬─────────┘
          │
          ▼
┌───────────────────┐
│      MongoDB      │
│ Persistência real │
└───────────────────┘
```

A integração do frontend React com esse fluxo persistido será realizada na próxima etapa.

---

# 🛠️ Tecnologias utilizadas

### Frontend

- React
- JavaScript
- JSX
- CSS
- Fetch API

### Backend

- Node.js
- Express
- API REST
- JavaScript
- `async/await`
- Controllers e rotas
- Tratamento de erros

### Inteligência Artificial

- Gemini API
- Google GenAI SDK
- LLM
- Prompts
- Structured Outputs
- JSON estruturado
- Validação de respostas

### Banco de dados

- MongoDB
- Mongoose
- MongoDB Compass
- Schema e Model
- CRUD persistido

### Ferramentas

- VS Code
- Thunder Client
- Git
- GitHub
- Variáveis de ambiente

---

# 🔐 Variáveis de ambiente

As configurações sensíveis devem ficar no arquivo `.env` do backend.

Exemplo:

```env
GEMINI_API_KEY=SUA_CHAVE_AQUI
MONGODB_URI=mongodb://127.0.0.1:27017/catalogo_ia
```

A variável `GEMINI_API_KEY` é utilizada para acessar a Gemini API.

A variável `MONGODB_URI` define a conexão com o banco de dados.

No exemplo acima, utilizamos uma instalação local do MongoDB e o banco chamado `catalogo_ia`.

⚠️ **Nunca publique chaves de API, senhas ou strings de conexão com credenciais no GitHub.**

O arquivo `.env` deve estar incluído no `.gitignore`.

Exemplo:

```gitignore
node_modules/
.env
.env.*
!.env.example
```

---

# 📦 Dependências principais

## Gemini SDK

```bash
npm install @google/genai
```

Exemplo de importação:

```javascript
const { GoogleGenAI } = require("@google/genai");
```

A chave é recuperada por meio de:

```javascript
process.env.GEMINI_API_KEY
```

## Mongoose

```bash
npm install mongoose
```

Exemplo de conexão:

```javascript
const mongoose = require("mongoose");

async function conectarBanco() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);

    console.log("MongoDB conectado com sucesso.");
  } catch (erro) {
    console.error("Erro ao conectar ao MongoDB:", erro.message);
    process.exit(1);
  }
}

module.exports = conectarBanco;
```

Essa função é utilizada pelo backend para estabelecer a conexão com o MongoDB.

---

# 🗃️ Model de Produto

O Mongoose permite definir uma estrutura para os documentos armazenados no MongoDB.

Nosso produto trabalha com os seguintes campos:

| Campo | Tipo | Finalidade |
|---|---|---|
| nome | String | Nome do produto |
| descricao | String | Descrição do produto |
| categoria | String | Categoria do produto |
| tags | Array de Strings | Palavras-chave |
| resumo | String | Resumo do produto |
| preco | Number | Preço do produto |
| createdAt | Date | Data de criação |
| updatedAt | Date | Data da última atualização |

O Schema permite definir tipos, valores padrão e validações.

Também utilizamos `timestamps` para registrar automaticamente as datas de criação e atualização.

---

# 🔄 Operações do CRUD com Mongoose

O backend utiliza as operações do Mongoose para acessar os produtos armazenados no MongoDB.

### Listar produtos

```javascript
const produtos = await Produto.find().sort({ createdAt: 1 });
```

### Cadastrar produto

```javascript
const novoProduto = await Produto.create({
  nome,
  descricao: descricao || "",
  categoria: categoria || "",
  tags: Array.isArray(tags) ? tags : [],
  resumo: resumo || "",
  preco
});
```

### Atualizar produto

```javascript
const produtoAtualizado = await Produto.findByIdAndUpdate(
  req.params.id,
  dadosAtualizados,
  {
    new: true,
    runValidators: true
  }
);
```

### Excluir produto

```javascript
const produtoExcluido = await Produto.findByIdAndDelete(
  req.params.id
);
```

Essas operações permitem substituir o CRUD baseado em arrays por um CRUD persistido em banco de dados.

---

# 🧪 Testando a API com Thunder Client

Durante a Parte 05, utilizamos Thunder Client para testar o backend independentemente do React.

| Método | Rota | Operação |
|---|---|---|
| GET | `/api/produtos` | Listar produtos |
| POST | `/api/produtos` | Cadastrar produto |
| PUT | `/api/produtos/:id` | Atualizar produto |
| DELETE | `/api/produtos/:id` | Excluir produto |

Exemplo de JSON para cadastro:

```json
{
  "nome": "Monitor Gamer",
  "descricao": "Monitor desenvolvido para jogos e produtividade.",
  "categoria": "Monitores",
  "tags": [
    "gamer",
    "monitor",
    "computador"
  ],
  "resumo": "Monitor para jogos com alta resolução.",
  "preco": 2999.90
}
```

Após realizar o cadastro, é possível visualizar os documentos armazenados utilizando o MongoDB Compass.

O MongoDB gera automaticamente um identificador `_id` para cada documento.

Esse identificador é utilizado nas operações de atualização e exclusão.

---

# ▶️ Executando o projeto

## 1. Clone o repositório

```bash
git clone https://github.com/marcoscaldas/aplicacao-ia-generativa-react-node.git
```

Entre na pasta:

```bash
cd aplicacao-ia-generativa-react-node
```

## 2. Configure o backend

```bash
cd backend
npm install
```

Crie o arquivo `.env`:

```env
GEMINI_API_KEY=SUA_CHAVE_AQUI
MONGODB_URI=mongodb://127.0.0.1:27017/catalogo_ia
```

Certifique-se de que o MongoDB esteja instalado e em execução.

Inicie o backend:

```bash
npm run dev
```

## 3. Configure o frontend

Em outro terminal, a partir da pasta principal do projeto:

```bash
cd frontend
npm install
npm run dev
```

Acesse o endereço informado pelo Vite no terminal.

### Observação

O backend já utiliza MongoDB para persistência dos produtos.

A integração completa da interface React com os identificadores e campos persistidos no MongoDB será realizada na próxima etapa do projeto.

Por enquanto, utilize o Thunder Client para validar as operações do CRUD persistido.

---

# ⚠️ Tratamento de erros

Uma aplicação real precisa considerar falhas no frontend, backend, banco de dados e serviços externos.

Durante o projeto, trabalhamos com tratamento de erros utilizando `try/catch`, logs e respostas HTTP.

### 400 — Bad Request

Indica problemas nos dados enviados pelo cliente.

### 404 — Not Found

Pode indicar que um produto solicitado não foi encontrado.

### 429 — Too Many Requests

Indica que o limite de requisições de um serviço foi atingido.

### 500 — Internal Server Error

Indica falha interna no servidor.

### 502 — Bad Gateway

Pode ser utilizado quando o backend atua como intermediário e encontra problemas ao se comunicar com um serviço externo.

### Depuração

Durante as implementações, investigamos erros reais de conexão, rotas e configuração.

O processo utilizado segue a ideia:

```text
PROBLEMA
   ↓
INVESTIGAÇÃO
   ↓
HIPÓTESE
   ↓
LOGS
   ↓
TESTE
   ↓
CORREÇÃO
   ↓
NOVO TESTE
```

**O objetivo não é apenas fazer funcionar, mas compreender por que funciona e como investigar quando algo falha.**

---

# 🛡️ Segurança

Alguns cuidados importantes ao trabalhar com APIs, IA Generativa e bancos de dados:

- Nunca colocar API Keys diretamente no frontend.
- Nunca publicar o arquivo `.env`.
- Utilizar variáveis de ambiente.
- Validar os dados recebidos pelo backend.
- Não confiar automaticamente nas respostas geradas pela IA.
- Tratar falhas de serviços externos.
- Utilizar validações no Schema do Mongoose.
- Registrar erros importantes para depuração.
- Evitar retornar informações internas do servidor ao usuário.
- Não expor credenciais de conexão com o banco de dados.

A IA deve ser tratada como qualquer outro **serviço externo consumido pela aplicação**.

---

# 🗺️ Roadmap do projeto

A proposta é evoluir a aplicação progressivamente, introduzindo cada tecnologia quando surgir um problema que justifique sua utilização.

### Etapas concluídas

```text
Aplicação tradicional React + Node.js
        ↓
CRUD em memória
        ↓
Integração com Gemini API
        ↓
Geração de descrição
        ↓
Structured Outputs
        ↓
JSON estruturado
        ↓
Validação no backend
        ↓
Integração dos dados no React
        ↓
MongoDB + Mongoose
        ↓
CRUD persistido no backend
```

### Próximas evoluções planejadas

```text
Integração do React com MongoDB
        ↓
Exibição dos dados persistidos
        ↓
Melhorias de validação
        ↓
Retry / Timeout
        ↓
Logs e monitoramento
        ↓
Testes automatizados
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

As etapas futuras representam possibilidades de evolução e ainda não fazem parte da implementação atual.

---

# 🎓 Possibilidades de aprendizado

Este projeto permite estudar diferentes conceitos em uma única aplicação:

- Lógica de programação.
- JavaScript.
- React e gerenciamento de estado.
- Node.js e Express.
- APIs REST.
- Controllers e rotas.
- Integração com serviços externos.
- IA Generativa e LLMs.
- Engenharia de prompts.
- Structured Outputs.
- Validação de dados.
- MongoDB e bancos NoSQL.
- Mongoose.
- Operações CRUD.
- Tratamento de erros.
- Depuração.
- Organização de projetos.
- Versionamento com Git e GitHub.

A proposta é que cada etapa ajude a compreender como diferentes tecnologias trabalham juntas na construção de um sistema real.

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

### 🎥 Vídeo da integração com IA

https://www.youtube.com/watch?v=uugS_fMMMG4

### 🎥 Vídeo da persistência com MongoDB

https://youtube.com/live/l564BLVvWa4

### 🔥 Playlist da série

https://www.youtube.com/playlist?list=PLd2WLKs-2v4o

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
- bancos de dados;
- Inteligência Artificial aplicada ao desenvolvimento de software.

---

## 📌 Status do projeto

```text
Parte 01 — CRUD React + Node.js + Express         ✅
Parte 02 — Integração com Gemini API              ✅
Parte 03 — Structured Outputs com Gemini          ✅
Parte 04 — Dados estruturados no React            ✅
Parte 05 — MongoDB + Mongoose no backend          ✅
Parte 06 — Integração React com MongoDB           🔜
```

**Projeto em evolução.**

> A programação começa antes do código. A tecnologia entra quando existe um problema a resolver.