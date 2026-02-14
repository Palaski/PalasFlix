# PalasFlix – TizenBrew Stremio Lite

Este repositório agora inclui metadados de módulo no **root** para melhorar compatibilidade com a opção **Instalar de GitHub** no TizenBrew e evitar identificação como `Unknown module`.

## Arquivos de compatibilidade (root)

- `module.json` → manifesto principal do módulo
- `manifest.json` → ponteiro para `module.json`
- `tizenbrew-module.json` → alias de descoberta para loaders alternativos

## Código do módulo

O código do app está em:

- `tizenbrew-stremio-lite/`

## Observação importante

Se sua versão do TizenBrew ainda mostrar `Unknown module`, pode haver incompatibilidade da versão do instalador com o formato de manifesto aceito por aquela build específica. Neste caso, atualize o TizenBrew e tente novamente.
