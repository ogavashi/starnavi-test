import { describe, expect, it, vi } from "vitest";
import { useFlow } from "./useFlow";
import { IPersonDetails } from "@types";
import { renderHook } from "@testing-library/react";

// Mock Node components
vi.mock("@features/person", () => ({
  PersonNode: () => null,
}));
vi.mock("@features/film", () => ({
  FilmNode: () => null,
}));
vi.mock("@features/starship", () => ({
  StarshipNode: () => null,
}));

describe("useFlow", () => {
  const mockPersonDetails: IPersonDetails = {
    person: {
      id: 13,
      name: "Chewbacca",
      height: "228",
      mass: "112",
      hair_color: "brown",
      skin_color: "unknown",
      eye_color: "blue",
      birth_year: "200BBY",
      gender: "male",
      homeworld: 14,
      films: [1, 2, 3, 6],
      species: [3],
      vehicles: [19],
      starships: [10, 22],
      created: "2014-12-10T16:42:45.066000Z",
      edited: "2014-12-20T21:17:50.332000Z",
      url: "https://sw-api.starnavi.io/people/13/",
    },
    films: [
      {
        id: 6,
        title: "Revenge of the Sith",
        episode_id: 3,
        opening_crawl:
          "War! The Republic is crumbling\r\nunder attacks by the ruthless\r\nSith Lord, Count Dooku.\r\nThere are heroes on both sides.\r\nEvil is everywhere.\r\n\r\nIn a stunning move, the\r\nfiendish droid leader, General\r\nGrievous, has swept into the\r\nRepublic capital and kidnapped\r\nChancellor Palpatine, leader of\r\nthe Galactic Senate.\r\n\r\nAs the Separatist Droid Army\r\nattempts to flee the besieged\r\ncapital with their valuable\r\nhostage, two Jedi Knights lead a\r\ndesperate mission to rescue the\r\ncaptive Chancellor....",
        director: "George Lucas",
        producer: "Rick McCallum",
        release_date: "2005-05-19",
        characters: [
          10, 12, 13, 20, 21, 33, 35, 1, 2, 3, 4, 5, 6, 7, 46, 11, 51, 52, 53, 54, 55, 56, 58, 63,
          64, 67, 68, 75, 78, 79, 80, 81, 82, 83,
        ],
        planets: [1, 2, 5, 8, 9, 12, 13, 14, 15, 16, 17, 18, 19],
        starships: [48, 59, 61, 63, 64, 65, 66, 68, 2, 32, 74, 75],
        vehicles: [50, 53, 56, 60, 62, 67, 69, 70, 71, 72, 73, 33, 76],
        species: [15, 19, 20, 1, 2, 3, 6, 28, 29, 30, 33, 34, 35, 36, 37, 23, 24, 25, 26, 27],
        created: "2014-12-20T18:49:38.403000Z",
        edited: "2014-12-20T20:47:52.073000Z",
        url: "https://sw-api.starnavi.io/films/6/",
      },
      {
        id: 1,
        title: "A New Hope",
        episode_id: 4,
        opening_crawl:
          "It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nspies managed to steal secret\r\nplans to the Empire's\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.\r\n\r\nPursued by the Empire's\r\nsinister agents, Princess\r\nLeia races home aboard her\r\nstarship, custodian of the\r\nstolen plans that can save her\r\npeople and restore\r\nfreedom to the galaxy....",
        director: "George Lucas",
        producer: "Gary Kurtz, Rick McCallum",
        release_date: "1977-05-25",
        characters: [10, 12, 13, 14, 15, 16, 18, 19, 1, 2, 3, 4, 5, 6, 7, 8, 9, 81],
        planets: [1, 2, 3],
        starships: [2, 3, 5, 9, 10, 11, 12, 13],
        vehicles: [4, 6, 7, 8],
        species: [1, 2, 3, 4, 5],
        created: "2014-12-10T14:23:31.880000Z",
        edited: "2014-12-20T19:49:45.256000Z",
        url: "https://sw-api.starnavi.io/films/1/",
      },
      {
        id: 2,
        title: "The Empire Strikes Back",
        episode_id: 5,
        opening_crawl:
          "It is a dark time for the\r\nRebellion. Although the Death\r\nStar has been destroyed,\r\nImperial troops have driven the\r\nRebel forces from their hidden\r\nbase and pursued them across\r\nthe galaxy.\r\n\r\nEvading the dreaded Imperial\r\nStarfleet, a group of freedom\r\nfighters led by Luke Skywalker\r\nhas established a new secret\r\nbase on the remote ice world\r\nof Hoth.\r\n\r\nThe evil lord Darth Vader,\r\nobsessed with finding young\r\nSkywalker, has dispatched\r\nthousands of remote probes into\r\nthe far reaches of space....",
        director: "Irvin Kershner",
        producer: "Gary Kurtz, Rick McCallum",
        release_date: "1980-05-17",
        characters: [10, 13, 14, 18, 20, 21, 22, 23, 24, 25, 26, 1, 2, 3, 4, 5],
        planets: [4, 5, 6, 27],
        starships: [3, 10, 11, 12, 15, 17, 21, 22, 23],
        vehicles: [8, 14, 16, 18, 19, 20],
        species: [1, 2, 3, 6, 7],
        created: "2014-12-12T11:26:24.656000Z",
        edited: "2014-12-15T13:07:53.386000Z",
        url: "https://sw-api.starnavi.io/films/2/",
      },
      {
        id: 3,
        title: "Return of the Jedi",
        episode_id: 6,
        opening_crawl:
          "Luke Skywalker has returned to\r\nhis home planet of Tatooine in\r\nan attempt to rescue his\r\nfriend Han Solo from the\r\nclutches of the vile gangster\r\nJabba the Hutt.\r\n\r\nLittle does Luke know that the\r\nGALACTIC EMPIRE has secretly\r\nbegun construction on a new\r\narmored space station even\r\nmore powerful than the first\r\ndreaded Death Star.\r\n\r\nWhen completed, this ultimate\r\nweapon will spell certain doom\r\nfor the small band of rebels\r\nstruggling to restore freedom\r\nto the galaxy...",
        director: "Richard Marquand",
        producer: "Howard G. Kazanjian, George Lucas, Rick McCallum",
        release_date: "1983-05-25",
        characters: [10, 13, 14, 16, 18, 20, 21, 22, 25, 27, 28, 29, 30, 31, 1, 2, 3, 4, 5, 45],
        planets: [1, 5, 7, 8, 9],
        starships: [27, 2, 3, 10, 11, 12, 15, 17, 22, 23, 28, 29],
        vehicles: [26, 8, 16, 18, 19, 24, 25, 30],
        species: [10, 15, 1, 2, 3, 5, 6, 8, 9],
        created: "2014-12-18T10:39:33.255000Z",
        edited: "2014-12-20T09:48:37.462000Z",
        url: "https://sw-api.starnavi.io/films/3/",
      },
    ],
    starships: [
      {
        id: 10,
        name: "Millennium Falcon",
        model: "YT-1300 light freighter",
        manufacturer: "Corellian Engineering Corporation",
        cost_in_credits: "100000",
        length: "34.37",
        max_atmosphering_speed: "1050",
        crew: "4",
        passengers: "6",
        cargo_capacity: "100000",
        consumables: "2 months",
        hyperdrive_rating: "0.5",
        MGLT: "75",
        starship_class: "Light freighter",
        pilots: [13, 14, 25, 31],
        films: [1, 2, 3],
        created: "2014-12-10T16:59:45.094000Z",
        edited: "2014-12-20T21:23:49.880000Z",
        url: "https://sw-api.starnavi.io/starships/10/",
      },
      {
        id: 22,
        name: "Imperial shuttle",
        model: "Lambda-class T-4a shuttle",
        manufacturer: "Sienar Fleet Systems",
        cost_in_credits: "240000",
        length: "20",
        max_atmosphering_speed: "850",
        crew: "6",
        passengers: "20",
        cargo_capacity: "80000",
        consumables: "2 months",
        hyperdrive_rating: "1.0",
        MGLT: "50",
        starship_class: "Armed government transport",
        pilots: [13, 14, 1],
        films: [2, 3],
        created: "2014-12-15T13:04:47.235000Z",
        edited: "2014-12-20T21:23:49.900000Z",
        url: "https://sw-api.starnavi.io/starships/22/",
      },
    ],
  };

  it("should generate nodes and edges correctly", () => {
    const { result } = renderHook(() => useFlow(mockPersonDetails));

    expect(result.current.nodes).toHaveLength(7);
    expect(result.current.edges).toHaveLength(9);

    const personNode = result.current.nodes.find(
      (node) => node.id === mockPersonDetails.person.name
    );
    expect(personNode).toBeDefined();
    expect(personNode?.type).toBe("person");

    const filmNodes = result.current.nodes.filter((node) => node.type === "film");
    expect(filmNodes).toHaveLength(4);

    const starshipNodes = result.current.nodes.filter((node) => node.type === "starship");
    expect(starshipNodes).toHaveLength(2);

    const filmEdges = result.current.edges.filter(
      (edge) => edge.source === mockPersonDetails.person.name
    );
    expect(filmEdges).toHaveLength(4);

    const starshipEdges = result.current.edges.filter((edge) =>
      mockPersonDetails.starships.some((starship) => starship.name === edge.target)
    );
    expect(starshipEdges).toHaveLength(5);
  });
});
