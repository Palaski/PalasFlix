# TizenBrew Stremio Lite (Tizen 9)

Módulo base para TV Samsung Tizen 9 com interface inspirada em apps de streaming (home com destaque + catálogo em grade) e camada de integração com provedores de debrid para **reprodução apenas de conteúdo legal que você já possui direitos de acesso**.

## Formato do módulo no TizenBrew

Este app usa o formato oficial **Application Module** do TizenBrew via `package.json` na raiz do repositório:

- `packageType: "app"`
- `appName`
- `appPath: "tizenbrew-stremio-lite/index.html"`
- `keys`
- `serviceFile: "service.js"`

## Recursos implementados

- Home com seções: **Destaques**, **Novidades**, **Em alta**.
- Cards em grade com clique para abrir fonte.
- Modal de seleção de stream.
- Fallback automático de RealDebrid para provider mock.
- Atalhos de controle remoto para Return/Play/Pause/Stop/PlayPause.
## Recursos implementados

- Home com seções: **Destaques**, **Novidades**, **Em alta**.
- Cards navegáveis por controle remoto (foco e clique).
- Modal de seleção de fonte de stream.
- Abstração de provider para debrid:
  - `MockDebridProvider` (demo local)
  - `RealDebridProvider` (consulta API com token)
- Fallback automático para mock quando API estiver indisponível.

## Estrutura

```text
package.json
service.js
tizenbrew-stremio-lite/
  config.xml
  index.html
  styles.css
  js/
    app.js
    api/debrid.js
    core/catalog.js
    ui/render.js
config.xml
index.html
styles.css
js/
  app.js
  api/debrid.js
  core/catalog.js
  ui/render.js
```

## Configuração rápida

1. Instale via GitHub no TizenBrew com `Palaski/PalasFlix`.
2. Configure token (opcional):
   ```js
   localStorage.setItem('REAL_DEBRID_TOKEN', 'SEU_TOKEN_AQUI');
   ```
1. Copie a pasta `tizenbrew-stremio-lite` para seu workspace Tizen.
2. Configure token (opcional):
   - Abra o app no Web Inspector e execute:
   ```js
   localStorage.setItem('REAL_DEBRID_TOKEN', 'SEU_TOKEN_AQUI');
   ```
3. Empacote como WGT usando o Tizen Studio.

## Próximos passos recomendados

- Adicionar provider para outros serviços de debrid.
- Integrar catálogo real (TMDB/Trakt/Jellyfin/Plex) com paginação.
- Navegação total por D-pad (setas + enter) com foco persistente por linha.
- Tela de detalhes com trailer, metadados e recomendações.
- Controle de idioma/áudio/legendas.

## Aviso

Este módulo não inclui indexadores, scraping ou distribuição de conteúdo protegido. Use apenas para acesso a mídia cuja licença/disponibilização seja legítima para sua conta.
