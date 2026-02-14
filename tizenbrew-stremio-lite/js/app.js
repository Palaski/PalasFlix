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

function normalizeRemoteKey(event) {
  const keyByCode = {
    10009: 'Return',
    19: 'MediaPause',
    415: 'MediaPlay',
    413: 'MediaStop',
    10252: 'MediaPlayPause'
  };

  if (event.key && event.key !== 'Unidentified') {
    return event.key;
  }

  return keyByCode[event.keyCode] || '';
}

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
  if (!playerPanel.hidden) {
    playerPanel.hidden = true;
  }
  playerPanel.hidden = true;
}

function setupTizenRemoteSupport() {
  const keyMap = {
    Escape: handleClosePlayer,
    Return: handleClosePlayer,
    MediaPlayPause: () => {
      if (videoElement.hidden) {
        return;
      }
      if (videoElement.paused) {
        videoElement.play();
      } else {
        videoElement.pause();
      }
    },
    MediaPlay: () => !videoElement.hidden && videoElement.play(),
    MediaPause: () => !videoElement.hidden && videoElement.pause(),
    MediaStop: () => {
      if (!videoElement.hidden) {
        videoElement.pause();
        videoElement.currentTime = 0;
    Escape: () => {
      if (!playerPanel.hidden) {
        handleClosePlayer();
      }
    }
  };

  window.addEventListener('keydown', (event) => {
    const remoteKey = normalizeRemoteKey(event);
    const handler = keyMap[remoteKey];
    if (handler) {
      event.preventDefault();
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
