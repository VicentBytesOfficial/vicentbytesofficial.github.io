# vicentbytesofficial.github.io
 
## 🇬🇧 English
 
This repository contains a static site hosted with GitHub Pages, published at [vicentbytesofficial.github.io](https://vicentbytesofficial.github.io).
 
### How it works
 
The root `index.html` acts as a language gateway. It doesn't render content itself — instead, `redirect.js` detects the visitor's browser language and automatically redirects them to the matching version of the site:
 
- [`/en/`](https://vicentbytesofficial.github.io/en/) — English version
- [`/es/`](https://vicentbytesofficial.github.io/es/) — Spanish version
If automatic redirection fails for any reason, a fallback message with manual links is shown.
 
### Structure
 
```
.
├── index.html          # Language gateway / redirector
├── redirect.js          # Redirection logic
├── en/                   # English content
├── es/                   # Spanish content
├── assets/               # General assets
├── special_assets/       # Special-purpose assets
└── images/               # Site images
```
 
---
 
## 🇪🇸 Español
 
Este repositorio contiene un sitio estático alojado con GitHub Pages, publicado en [vicentbytesofficial.github.io](https://vicentbytesofficial.github.io).
 
### Cómo funciona
 
El `index.html` de la raíz actúa como puerta de entrada según idioma. No renderiza contenido por sí mismo — en su lugar, `redirect.js` detecta el idioma del navegador de quien visita el sitio y lo redirige automáticamente a la versión correspondiente:
 
- [`/en/`](https://vicentbytesofficial.github.io/en/) — Versión en inglés
- [`/es/`](https://vicentbytesofficial.github.io/es/) — Versión en español
Si la redirección automática falla por algún motivo, se muestra un mensaje con enlaces manuales como alternativa.
 
### Estructura
 
```
.
├── index.html          # Puerta de entrada / redirector
├── redirect.js          # Lógica de redirección
├── en/                   # Contenido en inglés
├── es/                   # Contenido en español
├── assets/               # Recursos generales
├── special_assets/       # Recursos especiales
└── images/               # Imágenes del sitio
```