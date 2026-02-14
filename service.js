/**
 * Serviço Node do módulo TizenBrew.
 * Mantido mínimo para compatibilidade com o loader de módulos app.
 */

function log(...args) {
  console.log('[palasflix-service]', ...args);
}

function init() {
  log('service initialized');
}

function shutdown() {
  log('service shutdown');
}

module.exports = {
  init,
  shutdown
};
