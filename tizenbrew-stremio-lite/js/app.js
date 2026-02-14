import { catalogRows, getFeaturedItem } from './core/catalog.js';
import { MockDebridProvider, RealDebridProvider } from './api/debrid.js';
import { renderHero, renderRows, renderStreamOptions } from './ui/render.js';

const heroElement = document.getElementById('hero');
const rowsElement = document.getElementById('rows');
const playerPanel = document.getElementById('player-panel');
const playerTitle = document.getElementById('player-title');
const playerDescription = document.getElementById('player-description');
const sourceSelect = document.getElementById('source-select');
const playButton = document.getElementById('play-button');
const closePlayerButton = document.getElementById('close-player');
const videoElement = document.getElementById('video');

const providers = {
  mock: new MockDebridProvider(),
  realDebrid: new RealDebridProvider({ apiToken: globalThis.localStorage.getItem('REAL_DEBRID_TOKEN') || '' })
};

let activeMedia = null;
let activeStreams = [];

async function handleItemSelect(media) {
  activeMedia = media;
  playerTitle.textContent = media.title;
  playerDescription.textContent = media.overview;

  try {
    const realDebridStreams = await providers.realDebrid.getStreams(media);
    activeStreams = realDebridStreams.length ? realDebridStreams : await providers.mock.getStreams(media);
  } catch (_error) {
    activeStreams = await providers.mock.getStreams(media);
  }

  renderStreamOptions(sourceSelect, activeStreams);
  playerPanel.hidden = false;
}

function handlePlay() {
  const selectedUrl = sourceSelect.value;
  if (!selectedUrl || !activeMedia) {
    return;
  }

  videoElement.src = selectedUrl;
  videoElement.hidden = false;
  videoElement.play();
  playerPanel.hidden = true;
}

function handleClosePlayer() {
  playerPanel.hidden = true;
}

function setupTizenRemoteSupport() {
  const keyMap = {
    Escape: handleClosePlayer,
    Return: handleClosePlayer,
    MediaPlayPause: () => {
      if (videoElement.paused) {
        videoElement.play();
      } else {
        videoElement.pause();
      }
    },
    MediaPlay: () => videoElement.play(),
    MediaPause: () => videoElement.pause(),
    MediaStop: () => {
      videoElement.pause();
      videoElement.currentTime = 0;
    }
  };

  window.addEventListener('keydown', (event) => {
    const handler = keyMap[event.key];
    if (handler) {
      handler();
    }
  });
}

function init() {
  renderHero(heroElement, getFeaturedItem());
  renderRows(rowsElement, catalogRows, handleItemSelect);
  playButton.addEventListener('click', handlePlay);
  closePlayerButton.addEventListener('click', handleClosePlayer);
  setupTizenRemoteSupport();
}

init();
