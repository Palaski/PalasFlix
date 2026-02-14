# TizenBrew Stremio Lite (Tizen 9)

Módulo base com interface inspirada em apps de streaming e integração com debrid para uso legal.

## Caminho de execução no TizenBrew

O loader deve usar o app em `app/index.html` (definido no `package.json`).
A pasta `tizenbrew-stremio-lite/` foi mantida como fonte original para manutenção.

## Recursos

- Home com **Destaques**, **Novidades**, **Em alta**.
- Grade de cards + modal de seleção de stream.
- Providers: `MockDebridProvider` e `RealDebridProvider` com fallback.
- Suporte a teclas remotas (`Return`, `MediaPlay/Pause/Stop`, `MediaPlayPause`).

## Configuração

```js
localStorage.setItem('REAL_DEBRID_TOKEN', 'SEU_TOKEN_AQUI');
```

## Aviso

Use apenas para conteúdo legalmente acessível pela sua conta.
