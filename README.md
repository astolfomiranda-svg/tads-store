# 📱 TADS Tech Store

Uma aplicação completa de e-commerce responsiva desenvolvida em React + Vite. O projeto simula uma loja virtual com foco no nicho de tecnologia (smartphones e notebooks), implementando componentização, consumo de API assíncrona, gerenciamento de rotas e autenticação de usuários.

## 🛠️ Funcionalidades Implementadas por Camada

* **Etapa 1 — Componentização:** Interface modular e reutilizável dividida em componentes estruturais limpos: `Layout` (utilizando composição com `children`), `Cabecalho` (identidade visual), `Vitrine` e `ProdutoCard`. Renderização dinâmica de listas estruturada através do método `.map()` com chaves (`key={produto.id}`) exclusivas.
* **Etapa 2 — Estado, Hooks & API:** Integração com a API DummyJSON (`?limit=150`) utilizando os hooks `useState` e `useEffect` para carregamento assíncrono automatizado. Pré-filtragem de nicho mantendo apenas itens de tecnologia (`smartphones` e `laptops`). Sistema de filtros combinados em tempo real permitindo busca simultânea por digitação (input de texto) e seleção de categoria (select). Tratamento visual completo para estados de carregamento ("Carregando..."), falhas de conexão ("Erro") e retorno de pesquisa vazia.
* **Etapa 3 — Navegação (SPA):** Arquitetura de navegação de página única configurada com o `React Router`. Rota principal `/` carregando o catálogo geral e rota dinâmica `/produto/:id` para exibição detalhada da ficha técnica do item selecionado (realizando um novo fetch direcionado à API por ID). Rota de fallback configurada para renderização de uma página de erro 404 customizada.
* **Etapa 4 — Autenticação & Context API:** Gerenciamento de sessão global e estado de usuário autenticado centralizado através da `React Context API`. Tela de login funcional e rota totalmente protegida para a área restrita do cliente (`/minha-conta`). Mecanismo de guarda de rotas com redirecionamento automático de usuários não autenticados para o formulário de login, além de controle dinâmico de exibição na barra de navegação (botões "Entrar" / "Sair") e rotina de logout.

## 🚀 Como Executar o Projeto Localmente

1. Certifique-se de ter o Node.js instalado em seu sistema ambiente.
2. Na raiz do projeto, instale os pacotes de dependências declaradas no manifesto `package.json`:
   ```bash
   npm install