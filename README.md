# PalasFlix – módulo app para TizenBrew

Refatoração focada em **abrir com confiabilidade** no TizenBrew.

## O que foi feito para máxima compatibilidade

- `appPath` agora aponta para **`index.html` na raiz**.
- `index.html` é autossuficiente (HTML + CSS + JS inline), sem import de módulos.
- UI mínima pronta ao abrir:
  - abas (`Destaques`, `Novidades`, `Em alta`)
  - catálogo mockado em grade
  - painel de detalhes
- `service.js` expõe múltiplos nomes de lifecycle (`init/shutdown/onStart/onStop/start/stop`).

## Instalação

1. TizenBrew → **Install from GitHub**
2. Digite: `Palaski/PalasFlix`
3. Reinicie o TizenBrew
4. Abra **PalasFlix Stremio Lite**

## Observação

Após validar que abre e renderiza UI, a próxima etapa é reintroduzir integração debrid/player de forma incremental.
