export function renderHero(container, featured) {
  container.innerHTML = `
    <p class="badge">Featured</p>
    <h1>${featured.title} (${featured.year})</h1>
    <p>${featured.overview}</p>
  `;
}

export function renderRows(container, rows, onSelect) {
  container.innerHTML = '';
  for (const row of rows) {
    const section = document.createElement('section');
    section.className = 'row';
    section.innerHTML = `<h2>${row.title}</h2>`;

    const grid = document.createElement('div');
    grid.className = 'grid';

    for (const item of row.items) {
      const button = document.createElement('button');
      button.className = 'card';
      button.innerHTML = `
        <h3 class="card__title">${item.title}</h3>
        <p class="card__meta">${item.year} • ${item.genres.join(', ')}</p>
        <p>${item.overview}</p>
      `;
      button.addEventListener('click', () => onSelect(item));
      grid.appendChild(button);
    }

    section.appendChild(grid);
    container.appendChild(section);
  }
}

export function renderStreamOptions(select, streams) {
  select.innerHTML = streams
    .map((stream) => `<option value="${stream.url}">${stream.label}</option>`)
    .join('');
}
