const player = videojs('player');
let apiKey = '';

document.getElementById('token').addEventListener('change', (e) => apiKey = e.target.value);

async function addTorrent() {
  const magnet = document.getElementById('magnet').value;
  try {
    // Adiciona torrent
    let resp = await fetch('https://api.real-debrid.com/rest/1.0/torrents', {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${apiKey}` },
      body: JSON.stringify({ magnet })
    });
    let data = await resp.json();
    await selectFiles(data.id);
  } catch(e) { alert('Erro: ' + e); }
}

async function selectFiles(torrentId) {
  // Seleciona primeiro arquivo
  await fetch(`https://api.real-debrid.com/rest/1.0/torrents/${torrentId}/selectFiles`, {
    method: 'POST',
    headers: { 'Authorization': `Bearer ${apiKey}` }
  });
  loadStreams(torrentId);
}

async function loadStreams(torrentId) {
  let resp = await fetch(`https://api.real-debrid.com/rest/1.0/torrents/${torrentId}`, {
    headers: { 'Authorization': `Bearer ${apiKey}` }
  });
  let data = await resp.json();
  let streamUrl = data.links[0]; // Primeiro HLS
  player.src({ src: streamUrl, type: 'application/x-mpegURL' });
  player.play();
}
