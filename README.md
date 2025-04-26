# A3 Media Web Designer Teste

Este projeto foi desenvolvido para o processo seletivo da A3 Media.

Ele consiste na cópia fiel de duas páginas de concorrentes, transformadas em templates com Astro e gerenciadas dinamicamente com TinaCMS.

---

## 🚀 Tecnologias Utilizadas
- [Astro](https://astro.build/) (Framework para sites rápidos)
- [TinaCMS](https://tina.io/) (CMS para edição de conteúdo dinâmico)
- TailwindCSS (para estilização básica)
- Node.js (para automação de criação de páginas)

---

## 📂 Estrutura do Projeto

```
├── public/
│   ├── images/ (imagens usadas no site)
│   └── uploads/ (pasta para uploads do TinaCMS)
├── src/
│   ├── pages/
│   │   ├── paginatemplate1/[numero].astro
│   │   ├── paginatemplate2/[numero].astro
│   ├── components/
│   │   └── (componentes auxiliares se necessários)
│   └── styles/global.css
├── tina/
│   └── config.ts (configuração do TinaCMS)
├── generate-pages.cjs (script para criar 1000 arquivos .md)
├── astro.config.mjs
├── package.json
├── tsconfig.json
└── README.md
```

---

## 📜 Como Executar o Projeto

1. **Clone o repositório:**

```bash
git clone https://github.com/seu-usuario/seu-repo.git
cd seu-repo
```

2. **Instale as dependências:**

```bash
npm install
```

3. **Crie os arquivos dinâmicos (opcional se já estiver no repositório):**

```bash
node generate-pages.cjs
```

4. **Inicie o servidor de desenvolvimento:**

```bash
npm run dev
```

5. **Acesse no navegador:**

```
http://localhost:4321/
```

6. **Painel TinaCMS (modo local):**

```
http://localhost:4321/admin
```

Você pode criar, editar e gerenciar as páginas dinâmicas através do painel visual TinaCMS.

---

## 🎯 Funcionalidades Atendidas
- Cópia fiel de duas páginas de concorrentes.
- Templates dinâmicos usando Astro.
- 1000 páginas geradas dinamicamente.
- CMS para gerenciamento das páginas.
- Estrutura organizada e responsiva.

---

## 📑 Observações
- O TinaCMS está rodando em modo Local.
- O site é totalmente estático (pronto para deploy em Vercel, Netlify, etc).
- É possível expandir para outros funis ou páginas rapidamente.

---
