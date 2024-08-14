import { NODES_DIMENSION } from "@constants";
import { FilmNode } from "@features/film";
import { PersonNode } from "@features/person";
import { StarshipNode } from "@features/starship";
import { IPersonDetails } from "@types";
import { applyNodeChanges, Edge, Node, NodeChange } from "@xyflow/react";
import { useCallback, useEffect, useMemo, useState } from "react";

export const useFlow = (personDetails: IPersonDetails) => {
  const [nodes, setNodes] = useState<Node[]>([]);
  const [edges, setEdges] = useState<Edge[]>([]);

  const onNodesChange = useCallback(
    (changes: NodeChange<Node>[]) => setNodes((nds) => applyNodeChanges(changes, nds)),
    []
  );

  const nodeTypes = useMemo(
    () => ({ person: PersonNode, film: FilmNode, starship: StarshipNode }),
    []
  );

  const generateNodes = useCallback((details: IPersonDetails) => {
    const { person, starships, films } = details;

    const totalFilmWidth = (NODES_DIMENSION.FILM_WIDTH + NODES_DIMENSION.GAP) * (films.length + 1);

    const filmNodes: Node[] = films
      .sort((a, b) => a.episode_id - b.episode_id)
      .map((film, index) => ({
        id: String(film.id),
        data: { film },
        position: { x: (NODES_DIMENSION.FILM_WIDTH + NODES_DIMENSION.GAP) * (index + 1), y: 700 },
        type: "film",
      }));

    const starShipNodes: Node[] = starships.map((starhip, index) => ({
      id: starhip.name,
      data: { starship: starhip },
      position: {
        x: (NODES_DIMENSION.FILM_WIDTH + NODES_DIMENSION.GAP) * (index + 1),
        y: 1400,
      },
      type: "starship",
    }));

    const mainNode: Node = {
      id: person.name,
      data: { person },
      position: { x: totalFilmWidth / 2, y: 0 },
      type: "person",
    };

    const nodes: Node[] = [mainNode, ...filmNodes, ...starShipNodes];

    setNodes(nodes);
  }, []);

  const generateEdges = useCallback((details: IPersonDetails) => {
    const { person, starships, films } = details;

    const filmEdges: Edge[] = films.map((film) => ({
      id: `${person.name}-${film.title}`,
      source: String(person.name),
      target: String(film.id),
    }));

    const starshipEdges: Edge[] = starships.flatMap((starship) => {
      return starship.films.map((film) => ({
        id: `${starship.name}-${film}`,
        source: String(film),
        target: String(starship.name),
      }));
    });

    const edges: Edge[] = [...filmEdges, ...starshipEdges];

    setEdges(edges);
  }, []);

  useEffect(() => {
    generateNodes(personDetails);
    generateEdges(personDetails);
  }, [generateEdges, generateNodes, personDetails]);

  return { nodes, onNodesChange, edges, nodeTypes };
};
