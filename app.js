(function () {
  var data = {
    Destaques: [
      { title: 'Duna 2', info: 'Sci-Fi • 2024' },
      { title: 'Oppenheimer', info: 'Drama • 2023' },
      { title: 'Blade Runner 2049', info: 'Sci-Fi • 2017' }
    ],
    Novidades: [
      { title: 'Furiosa', info: 'Ação • 2024' },
      { title: 'Rivais', info: 'Drama • 2024' },
      { title: 'Civil War', info: 'Guerra • 2024' }
    ],
    'Em alta': [
      { title: 'John Wick 4', info: 'Ação • 2023' },
      { title: 'Top Gun Maverick', info: 'Ação • 2022' },
      { title: 'The Batman', info: 'Crime • 2022' }
    ]
  };

  var sections = Object.keys(data);
  var active = sections[0];

  var tabsEl = document.getElementById('tabs');
  var heroEl = document.getElementById('hero');
  var titleEl = document.getElementById('section-title');
  var gridEl = document.getElementById('grid');

  function renderTabs() {
    tabsEl.innerHTML = '';
    sections.forEach(function (name) {
      var btn = document.createElement('button');
      btn.className = 'tab' + (name === active ? ' active' : '');
      btn.textContent = name;
      btn.onclick = function () {
        active = name;
        render();
      };
      tabsEl.appendChild(btn);
    });
  }

  function renderHero() {
    heroEl.textContent = 'Destaque: ' + data[active][0].title;
  }

  function renderGrid() {
    titleEl.textContent = active;
    gridEl.innerHTML = '';
    data[active].forEach(function (item) {
      var card = document.createElement('button');
      card.className = 'card';
      card.innerHTML = '<strong>' + item.title + '</strong><br><small>' + item.info + '</small>';
      gridEl.appendChild(card);
    });
  }

  renderTabs();
  renderHero();
  renderGrid();
})();
