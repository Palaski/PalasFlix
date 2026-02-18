/**
 * Serviço mínimo para compatibilidade com loaders diferentes do TizenBrew.
 */
function log(name) {
  console.log('[palasflix-service] ' + name);
}

function init() { log('init'); }
function shutdown() { log('shutdown'); }
function onStart() { log('onStart'); }
function onStop() { log('onStop'); }
function start() { log('start'); }
function stop() { log('stop'); }

module.exports = {
  init,
  shutdown,
  onStart,
  onStop,
  start,
  stop
};
