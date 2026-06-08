# 🐙 Projeto GitHub API

Uma aplicação frontend que consome a **API pública do GitHub** para buscar e exibir informações de usuários e repositórios.

---

## 📋 Sobre o Projeto

Este projeto foi desenvolvido com o objetivo de explorar a API REST do GitHub, permitindo a busca de perfis de usuários e listagem de seus repositórios públicos de forma prática e visual.

---

## 🚀 Tecnologias Utilizadas

- **TypeScript** — tipagem estática para maior segurança e manutenibilidade
- **CSS** — estilização da interface
- **JavaScript** — lógica de interação
- **HTML** — estrutura da aplicação
- **GitHub REST API** — fonte de dados

---

## 📁 Estrutura do Projeto

```
projeto-githubAPI/
└── frontend/        # Aplicação frontend
```

---

## ⚙️ Como Executar

### Pré-requisitos

- [Node.js](https://nodejs.org/) instalado
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

### Passo a passo

```bash
# 1. Clone o repositório
git clone https://github.com/ryansouzas/projeto-githubAPI.git

# 2. Acesse a pasta do projeto
cd projeto-githubAPI/frontend

# 3. Instale as dependências
npm install

# 4. Inicie o servidor de desenvolvimento
npm run dev
```

A aplicação estará disponível em `http://localhost:5173` (ou a porta indicada no terminal).

---

## 🔍 Funcionalidades

- 🔎 Busca de usuários pelo nome de perfil do GitHub
- 📦 Listagem de repositórios públicos do usuário
- 📊 Exibição de informações do perfil (avatar, bio, seguidores, etc.)

---

## 📡 API Utilizada

[GitHub REST API v3](https://docs.github.com/en/rest)

Exemplos de endpoints utilizados:
- `GET https://api.github.com/users/{username}` — dados do usuário
- `GET https://api.github.com/users/{username}/repos` — repositórios do usuário

> A API do GitHub permite até **60 requisições por hora** sem autenticação. Para aumentar esse limite, é possível configurar um token de acesso pessoal (PAT).

---

Desenvolvido por [ryansouzas](https://github.com/ryansouzas) 🚀
