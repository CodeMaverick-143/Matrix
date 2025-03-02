# Matrix - Advanced Cybersecurity Platform

![Matrix Logo](public/cyber-icon.svg)

## Overview

Matrix is a modern, responsive web application designed for cybersecurity professionals, ethical hackers, and security enthusiasts. The platform provides access to security tools, resources, and educational content in a sleek, cyberpunk-inspired interface.

## Features

- **Interactive Terminal-Style Loading Screen**: Engages users with a hacker-themed loading experience
- **Comprehensive Security Tools**: Access to network scanners, password crackers, traffic analyzers, and more
- **Educational Resources**: Documentation, learning paths, and certification guides
- **Interactive Visualizations**: Including the TorFlow network visualization
- **Responsive Design**: Fully functional across desktop and mobile devices
- **Cyberpunk Aesthetic**: Modern UI with terminal-inspired elements

## Tech Stack

- **React**: Frontend library for building the user interface
- **TypeScript**: Type-safe JavaScript for improved developer experience
- **React Router**: For seamless navigation between pages
- **CSS-in-JS**: Using styled-jsx for component-scoped styling
- **Vite**: Fast, modern build tool for frontend development

## Project Structure

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
