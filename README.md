# PalasFlix – módulo app para TizenBrew

Este repositório segue o formato de **Application Module** do TizenBrew com `package.json` na raiz.

## Ajuste importante para compatibilidade

Para ficar mais próximo dos módulos de referência, o app web foi colocado em `app/` e o `package.json` agora aponta para:

- `appPath: "app/index.html"`
- `serviceFile: "./service.js"`
- `main: "service.js"` (fallback de compatibilidade para loaders que leem `main`)

Também mantive o código original em `tizenbrew-stremio-lite/` para facilitar desenvolvimento, mas o loader deve usar `app/`.

## Instalação via GitHub

No TizenBrew, use **Install from GitHub** e informe:

`Palaski/PalasFlix`

## Solução para erros comuns

- **Unknown module**: geralmente acontece quando o loader não reconhece os campos do manifesto; por isso o módulo agora usa `app/` + `main`.
- **Crash após instalar**: atualize o TizenBrew para a versão mais recente e reinstale.
