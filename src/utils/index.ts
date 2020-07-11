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

const generateArrayofEpisodes = (num: number): number[] => {
  const arrayOfepisodes: number[] = [];
  for (let i = 1; i <= num; i++) arrayOfepisodes.push(i);
  return arrayOfepisodes;
};

const fetchData = async (url: string) => {
  const response = await fetch(url);
  return await response.json();
};

export {
  filterByStatus,
  filterByEpisode,
  filterByGender,
  generateArrayofEpisodes,
  fetchData,
};
