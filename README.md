# PalasFlix – módulo app para TizenBrew

Este repositório segue o formato oficial de **Application Module** do TizenBrew.

## Estrutura esperada pelo TizenBrew

- `package.json` com os campos:
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

O loader deve identificar o módulo pelo `package.json` da raiz.

## Observações

- Este módulo é para uso com conteúdo legalmente acessível pela sua conta.
- Se ocorrer crash na instalação, atualize o TizenBrew para a versão mais recente e tente novamente.
