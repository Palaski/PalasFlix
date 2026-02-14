# PalasFlix – módulo app para TizenBrew

Este repositório segue o formato de **Application Module** do TizenBrew com `package.json` na raiz.

## Ajustes de compatibilidade aplicados

Para evitar caso em que instala mas não abre:

- `appPath` aponta para `index.html` na raiz.
- `index.html` da raiz redireciona para `app/index.html`.
- `service.js` expõe múltiplos lifecycles (`init/shutdown/onStart/onStop`) para compatibilidade entre loaders.

## Instalação via GitHub

No TizenBrew, use **Install from GitHub** e informe:

`Palaski/PalasFlix`

Depois de instalar, reinicie o TizenBrew e abra **PalasFlix Stremio Lite**.

## Solução para erros comuns

- **Unknown module**: loader não reconheceu metadados do `package.json`.
- **Instala, mas não abre**: normalmente `appPath` incompatível com a versão do loader. Esta versão usa `index.html` na raiz para evitar esse problema.
- **Crash após instalar**: atualize o TizenBrew para a versão mais recente e reinstale.
