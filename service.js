/**
 * Serviço Node do módulo TizenBrew.
 * Expõe múltiplos nomes de lifecycle para compatibilidade entre versões do loader.
 */

function log(...args) {
  console.log('[palasflix-service]', ...args);
}

function init() {
  log('init');
}

function shutdown() {
  log('shutdown');
}

function onStart() {
  log('onStart');
}

function onStop() {
  log('onStop');
}

module.exports = {
  init,
  shutdown,
  onStart,
  onStop
};
