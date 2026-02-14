export const catalogRows = [
  {
    title: 'Destaques',
    items: [
      { id: 'movie-1', title: 'Blade Runner 2049', year: 2017, genres: ['Sci-Fi'], overview: 'Um replicante investiga segredos ocultos.', trendingScore: 98 },
      { id: 'movie-2', title: 'Duna: Parte Dois', year: 2024, genres: ['Sci-Fi', 'Aventura'], overview: 'A jornada de Paul Atreides continua.', trendingScore: 96 },
      { id: 'movie-3', title: 'Oppenheimer', year: 2023, genres: ['Drama'], overview: 'A criação da bomba atômica.', trendingScore: 93 }
    ]
  },
  {
    title: 'Novidades',
    items: [
      { id: 'movie-4', title: 'Missão: Impossível - Acerto Final', year: 2025, genres: ['Ação'], overview: 'Missão extrema com Ethan Hunt.', trendingScore: 95 },
      { id: 'movie-5', title: 'Rivais', year: 2024, genres: ['Drama'], overview: 'Relações intensas no circuito de tênis.', trendingScore: 82 },
      { id: 'movie-6', title: 'Furiosa', year: 2024, genres: ['Ação'], overview: 'Origens de uma guerreira no deserto.', trendingScore: 91 }
    ]
  },
  {
    title: 'Em alta',
    items: [
      { id: 'movie-7', title: 'John Wick 4', year: 2023, genres: ['Ação'], overview: 'O lendário assassino enfrenta novos inimigos.', trendingScore: 89 },
      { id: 'movie-8', title: 'Tudo em Todo Lugar ao Mesmo Tempo', year: 2022, genres: ['Aventura'], overview: 'Uma aventura multiversal frenética.', trendingScore: 88 },
      { id: 'movie-9', title: 'Top Gun: Maverick', year: 2022, genres: ['Ação'], overview: 'Pilotos de elite e manobras arriscadas.', trendingScore: 90 }
    ]
  }
];

export function getFeaturedItem() {
  return catalogRows[0].items[0];
}
