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

- **Unknown module**: normalmente indica que o loader não encontrou um `package.json` válido na raiz.
- **Crash após instalar**: atualize o TizenBrew para a versão mais recente e reinstale o módulo.
- **Teclas multimídia não respondem**: confira se a TV/firmware está enviando os eventos e se as teclas listadas em `package.json` estão registradas.

## Observações

- Este módulo é para uso com conteúdo legalmente acessível pela sua conta.
