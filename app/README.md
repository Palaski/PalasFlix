# App frontend (loader target)

Este diretório contém o frontend executado pelo módulo do TizenBrew.

Fluxo de abertura:
1. Loader abre `index.html` na raiz do repositório.
2. `index.html` redireciona para `app/index.html`.
3. O frontend carrega `js/app.js` e renderiza o catálogo.
