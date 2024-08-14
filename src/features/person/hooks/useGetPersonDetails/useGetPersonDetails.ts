/* eslint-disable react-hooks/exhaustive-deps */
import { useSnackbar } from "@features/app";
import { ApiService } from "@services";
import { IPersonDetails } from "@types";
import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const useGetPersonDetails = () => {
  const { id } = useParams();

  const [personDetails, setPersonDetails] = useState<IPersonDetails>();
  const [isLoading, setIsLoading] = useState(true);

  const { showSnackbar } = useSnackbar();

  const getPerson = useCallback(async () => {
    setIsLoading(true);
    try {
      const details = await ApiService.people.getPerson(String(id));

      setPersonDetails(details);
    } catch (error) {
      if (error instanceof Error) {
        showSnackbar(error.message, "error");
      }
    } finally {
      setIsLoading(false);
    }
  }, [id]);

  useEffect(() => {
    getPerson();
  }, [getPerson]);

  return { personDetails, isLoading };
};
