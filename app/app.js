(function () {
  var catalogByTab = {
    Destaques: [
      { title: 'Duna: Parte Dois', year: 2024, genre: 'Sci-Fi', overview: 'Conflito político e guerra em Arrakis.' },
      { title: 'Oppenheimer', year: 2023, genre: 'Drama', overview: 'A história da criação da bomba atômica.' },
      { title: 'Blade Runner 2049', year: 2017, genre: 'Sci-Fi', overview: 'Investigação em um futuro distópico.' },
      { title: 'Mad Max: Estrada da Fúria', year: 2015, genre: 'Ação', overview: 'Fuga intensa em um deserto pós-apocalíptico.' },
      { title: 'Interstellar', year: 2014, genre: 'Sci-Fi', overview: 'Uma missão espacial para salvar a humanidade.' }
    ],
    Novidades: [
      { title: 'Furiosa', year: 2024, genre: 'Ação', overview: 'Origem da guerreira do universo Mad Max.' },
      { title: 'Rivais', year: 2024, genre: 'Drama', overview: 'Rivalidade e paixão no circuito de tênis.' },
      { title: 'The Fall Guy', year: 2024, genre: 'Ação', overview: 'Dublê se envolve em conspiração de Hollywood.' },
      { title: 'Civil War', year: 2024, genre: 'Guerra', overview: 'Jornalistas cruzam os EUA em colapso.' },
      { title: 'Alien: Romulus', year: 2024, genre: 'Terror', overview: 'Grupo enfrenta criatura letal no espaço.' }
    ],
    'Em alta': [
      { title: 'John Wick 4', year: 2023, genre: 'Ação', overview: 'Wick encara o submundo global.' },
      { title: 'Top Gun: Maverick', year: 2022, genre: 'Ação', overview: 'Pilotos de elite em missão extrema.' },
      { title: 'Tudo em Todo Lugar ao Mesmo Tempo', year: 2022, genre: 'Aventura', overview: 'Caos multiversal com drama familiar.' },
      { title: 'The Batman', year: 2022, genre: 'Crime', overview: 'Bruce Wayne enfrenta mistério em Gotham.' },
      { title: 'Duna', year: 2021, genre: 'Sci-Fi', overview: 'Início da jornada de Paul Atreides.' }
    ]
  };

  var tabs = Object.keys(catalogByTab);
  var activeTab = tabs[0];
  var activeItem = null;

  var tabsEl = document.getElementById('tabs');
  var heroEl = document.getElementById('hero');
  var rowTitleEl = document.getElementById('row-title');
  var gridEl = document.getElementById('grid');
  var detailsEl = document.getElementById('details');
  var detailsTitleEl = document.getElementById('details-title');
  var detailsMetaEl = document.getElementById('details-meta');
  var detailsOverviewEl = document.getElementById('details-overview');
  var playBtn = document.getElementById('play-mock');
  var closeDetailsBtn = document.getElementById('close-details');

  function renderTabs() {
    tabsEl.innerHTML = '';
    tabs.forEach(function (tab) {
      var button = document.createElement('button');
      button.className = 'tab' + (tab === activeTab ? ' active' : '');
      button.textContent = tab;
      button.type = 'button';
      button.addEventListener('click', function () {
        activeTab = tab;
        detailsEl.hidden = true;
        render();
      });
      tabsEl.appendChild(button);
    });
  }

  function renderHero() {
    var featured = catalogByTab[activeTab][0];
    heroEl.innerHTML =
      '<span class="badge">Destaque</span>' +
      '<h2>' + featured.title + ' (' + featured.year + ')</h2>' +
      '<p>' + featured.overview + '</p>';
  }

  function openDetails(item) {
    activeItem = item;
    detailsTitleEl.textContent = item.title;
    detailsMetaEl.textContent = item.year + ' • ' + item.genre;
    detailsOverviewEl.textContent = item.overview;
    detailsEl.hidden = false;
  }

  function renderGrid() {
    var items = catalogByTab[activeTab];
    rowTitleEl.textContent = activeTab;
    gridEl.innerHTML = '';

    items.forEach(function (item) {
      var card = document.createElement('button');
      card.type = 'button';
      card.className = 'card';
      card.innerHTML =
        '<h3>' + item.title + '</h3>' +
        '<p class="meta">' + item.year + ' • ' + item.genre + '</p>' +
        '<p class="overview">' + item.overview + '</p>';
      card.addEventListener('click', function () { openDetails(item); });
      gridEl.appendChild(card);
    });
  }

  function registerRemoteKeys() {
    window.addEventListener('keydown', function (event) {
      var keyCode = event.keyCode;
      if (event.key === 'Return' || keyCode === 10009 || event.key === 'Escape') {
        if (!detailsEl.hidden) {
          detailsEl.hidden = true;
          event.preventDefault();
        }
      }
    });
  }

  function wireActions() {
    playBtn.addEventListener('click', function () {
      if (!activeItem) {
        return;
      }
      window.alert('Mock play: ' + activeItem.title + '\n(Integrar player/debrid na próxima etapa)');
    });

    closeDetailsBtn.addEventListener('click', function () {
      detailsEl.hidden = true;
    });
  }

  function render() {
    renderTabs();
    renderHero();
    renderGrid();
  }

  wireActions();
  registerRemoteKeys();
  render();
})();
