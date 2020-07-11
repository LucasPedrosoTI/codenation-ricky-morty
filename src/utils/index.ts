import { Result } from "../interfaces/interfaces";

const filterByStatus = (characters: Result[], status: string): Result[] => {
  return characters.filter((char) => char.status === status);
};

const filterByGender = (characters: Result[], gender: string): Result[] => {
  return characters.filter((char) => char.gender === gender);
};

const filterByEpisode = (characters: Result[], episode: string) => {
  return characters.filter((char) =>
    char.episode.includes(`https://rickandmortyapi.com/api/episode/${episode}`)
  );
};

export { filterByStatus, filterByEpisode, filterByGender };
