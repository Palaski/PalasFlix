# PalasFlix – módulo app para TizenBrew

Este repositório segue o formato oficial de **Application Module** do TizenBrew usando `package.json` na raiz.

## Estrutura esperada pelo TizenBrew

- `package.json` com:
  - `packageType: "app"`
  - `appName`
  - `appPath`
  - `keys`
  - `serviceFile`
- `service.js` (serviço Node do módulo)
- app web em `tizenbrew-stremio-lite/index.html`

## Instalação via GitHub no TizenBrew

No TizenBrew, use **Install from GitHub** e informe:

`Palaski/PalasFlix`

## Solução para erros comuns

- **Unknown module**: normalmente indica que o loader não encontrou um `package.json` válido na raiz.
- **Crash após instalar**: atualize o TizenBrew para a versão mais recente e reinstale o módulo.
- **Teclas multimídia não respondem**: confira se a TV/firmware está enviando os eventos e se as teclas listadas em `package.json` estão registradas.

## Observações

- Este módulo é para uso com conteúdo legalmente acessível pela sua conta.
