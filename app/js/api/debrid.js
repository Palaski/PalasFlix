/**
 * Camada de abstração para provedores de debrid.
 * Cada provider deve implementar o método `getStreams`.
 */
export class DebridProvider {
  constructor(name) {
    this.name = name;
  }

  async getStreams(_media) {
    throw new Error(`Provider ${this.name} não implementado.`);
  }
}

export class MockDebridProvider extends DebridProvider {
  constructor() {
    super('MockDebrid');
  }

  async getStreams(media) {
    return [
      {
        id: `${media.id}-1080p`,
        label: '1080p • H.264 • Português/EN',
        url: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8'
      },
      {
        id: `${media.id}-720p`,
        label: '720p • H.264 • Português/EN',
        url: 'https://test-streams.mux.dev/test_001/stream.m3u8'
      }
    ];
  }
}

export class RealDebridProvider extends DebridProvider {
  constructor({ apiToken }) {
    super('RealDebrid');
    this.apiToken = apiToken;
    this.baseUrl = 'https://api.real-debrid.com/rest/1.0';
  }

  async getStreams(media) {
    if (!this.apiToken) {
      throw new Error('Configure REAL_DEBRID_TOKEN para usar o provider RealDebrid.');
    }

    const response = await fetch(`${this.baseUrl}/torrents`, {
      headers: {
        Authorization: `Bearer ${this.apiToken}`
      }
    });

    if (!response.ok) {
      throw new Error(`Falha ao consultar RealDebrid: ${response.status}`);
    }

    const torrents = await response.json();
    return torrents
      .filter((torrent) => torrent.filename?.toLowerCase().includes(media.title.toLowerCase()))
      .slice(0, 6)
      .map((torrent) => ({
        id: torrent.id,
        label: `${torrent.filename} • ${torrent.status}`,
        url: torrent.links?.[0]
      }))
      .filter((stream) => stream.url);
  }
}
