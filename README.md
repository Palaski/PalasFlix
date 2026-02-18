# PalasFlix – módulo app para TizenBrew

Módulo no formato oficial `packageType: "app"` para TizenBrew, com frontend básico funcionando para validação de abertura na TV.

## O que foi simplificado para garantir abertura

- App frontend único em `app/`.
- Script frontend em JS clássico (`app/app.js`), sem `type="module"`.
- Catálogo mockado com abas e cards clicáveis.
- Painel de detalhes com botão de play mock.

## Instalação

1. No TizenBrew: **Install from GitHub**.
2. Informe: `Palaski/PalasFlix`.
3. Reinicie o TizenBrew após instalar.
4. Abra **PalasFlix Stremio Lite**.

## Metadados importantes

- `appPath`: `app/index.html`
- `serviceFile`: `service.js`
- `main`: `service.js`

## Próximos passos

Depois de validar abertura/UI, a próxima etapa é reconectar camada de debrid/player sobre esta base estável.
