import { Loader, NotFound } from "@components";
import { PersonDetails, useGetPersonDetails } from "@features/person";
import { Box } from "@mui/material";
import { useCallback } from "react";

export const Person = () => {
  const { isLoading, personDetails } = useGetPersonDetails();

  const renderContent = useCallback(() => {
    if (isLoading) {
      return <Loader sx={{ height: "80vh" }} />;
    }

    if (!personDetails) {
      return <NotFound />;
    }

    return <PersonDetails personDetails={personDetails} />;
  }, [personDetails, isLoading]);

  return <Box sx={{ flex: 1 }}>{renderContent()}</Box>;
};
