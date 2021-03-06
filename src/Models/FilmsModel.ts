export type FilmsModel = {
  count: number;
  next: null;
  previous: null;
  results: FilmsResultsModel[];
};

export type FilmsResultsModel = {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  characters: [string];
  planets: [string];
  starships: [string];
  vehicles: [string];
  species: [string];
  created: string;
  edited: string;
  url: string;
};
