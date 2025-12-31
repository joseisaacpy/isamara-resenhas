# 📚 Isamara Resenhas

Projeto de um **blog de resenhas** (livros, filmes e séries), desenvolvido com **Next.js (App Router)**, **Prisma** e **PostgreSQL**, com áreas públicas e privadas.

---

## 🚀 Tecnologias utilizadas

- Next.js 14+ (App Router)
- React
- TypeScript
- Prisma ORM
- PostgreSQL
- Tailwind CSS
- pnpm

---

## 📁 Estrutura do projeto

### `app/`
Responsável pelas rotas e layouts da aplicação.

- **(public)**  
  Rotas públicas do site  
  - **(blog)** → listagem e detalhes das resenhas  
  - **login** → autenticação  

- **(private)**  
  Rotas protegidas  
  - **painel** → área administrativa  

- **api/**  
  Rotas da API (Next.js Route Handlers)  
  - **auth** → login  
  - **logout** → logout  
  - **me** → dados do usuário autenticado  
  - **reviews** → CRUD de resenhas  

- `layout.tsx` → layout principal  
- `not-found.tsx` → página 404  

---

### `components/`
Componentes reutilizáveis da aplicação.

- `CardReview` → card de resenha (público)
- `CardReviewAdmin` → card de resenha (admin)
- `SelectCategory` → filtro de categorias
- `Header`, `Footer`, `Loader`, etc.
- **ui/** → componentes base (Button, Card, Dialog, etc.)

---

### `lib/`
Funções utilitárias e configurações.

- `prisma.ts` → instância do Prisma Client
- `formatDate.ts` → formatação de datas
- `utils.ts` → helpers gerais
- `useLogout.ts` → hook de logout

---

### `prisma/`
Configuração do banco de dados.

- `schema.prisma` → modelos e enums
- `migrations/` → histórico de migrações

---

### `scripts/`
Scripts auxiliares.

- `create-admin.ts` → cria usuário admin
- `create-reviews.ts` → seed de resenhas

---

### `types/`
Tipos TypeScript compartilhados.

- `reviewCard.ts` → tipagem das resenhas exibidas em cards

---

### `public/`
Arquivos estáticos.

- `assets/favicons` → ícones do site
- `assets/images` → imagens públicas (fallback, etc.)

---
