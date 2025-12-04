# 🚀 Projeto React – Site com Componentização, Props e useState

Este é um projeto simples desenvolvido em **React**, aplicando conceitos essenciais para construir interfaces modernas, organizadas e reutilizáveis.

O foco deste projeto é demonstrar na prática:

- ✔️ Componentização  
- ✔️ Uso de **props**  
- ✔️ Gerenciamento de estado com **useState**  
- ✔️ Estrutura limpa e organizada  
- ✔️ Renderização dinâmica de conteúdo  

---

## 🧩 Tecnologias Utilizadas

- **React.js**
- **JavaScript (ES6+)**
- **CSS / SCSS**
- **Vite**

---

## 🎨 Funcionalidades do Projeto

### 🧱 Componentização
Todo o site é construído usando vários componentes independentes, permitindo reaproveitamento e melhor manutenção do código.

Exemplos de componentes:
- `Banner`
-  `Produtos`
- `Lancamentos`

---

### 📨 Uso de Props
O projeto utiliza props para tornar os componentes dinâmicos e reutilizáveis.

- O componente **Banner** recebe diferentes imagens via props, permitindo criar vários banners usando o mesmo componente.

---

### 🔄 Gerenciamento de Estado – useState
O hook `useState` é utilizado para controlar estados internos, como:
- Exibição de elementos
- Mudança de informações dinâmicas
- Botões que alteram algo no layout

---

## 📁 Estrutura de Pastas (simplificada)



# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
