import { Base } from ".";
import { IFilm, IPerson, IStarship, IPersonDetails, Response } from "@types";

export class People extends Base {
  getPeople = async (page: number = 1): Promise<Response<IPerson>> => {
    const data = await this.apiClient.get("/people", { page });

    return data;
  };

  getPerson = async (id: string): Promise<IPersonDetails> => {
    // Fetch person details and films with current person
    const [person, { results: films }]: [person: IPerson, { results: IFilm[] }] = await Promise.all(
      [this.apiClient.get(`/people/${id}`), this.apiClient.get(`/films`, { characters: id })]
    );

    const { results: starships }: { results: IStarship[] } = await this.apiClient.get(
      "/starships/",
      {
        id__in: person.starships.join(","),
      }
    );

    // Leave only ships with person's movies
    const personalizedShips: IStarship[] = starships.map((starship: IStarship) => ({
      ...starship,
      films: starship.films.filter((film: number) => person.films.includes(film)),
    }));

    const result = { person, films, starships: personalizedShips };

    return result;
  };
}
