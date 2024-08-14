/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useCallback, useEffect } from "react";
import { ApiService } from "@services";
import { IPerson } from "@types";
import { useSnackbar } from "@features/app";

export const useGetPeople = () => {
  const [people, setPeople] = useState<IPerson[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  const { showSnackbar } = useSnackbar();

  const fetchPeople = useCallback(async () => {
    try {
      const { next, results } = await ApiService.people.getPeople(page);

      if (!next) {
        setHasMore(false);
      } else {
        setPeople((prev) => [...prev, ...results]);
        setPage((prev) => prev + 1);
      }
    } catch (error) {
      if (error instanceof Error) {
        showSnackbar(error.message, "error");
      }
    } finally {
      setIsLoading(false);
    }
  }, [page]);

  useEffect(() => {
    fetchPeople();
  }, []);

  return { people, hasMore, isLoading, fetchPeople };
};
