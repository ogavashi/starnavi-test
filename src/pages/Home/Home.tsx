import { Loader } from "@components";
import { PeopleList, useGetPeople } from "@features/people";
import { Box } from "@mui/material";

export const Home = () => {
  const { people, hasMore, isLoading, fetchPeople } = useGetPeople();

  return (
    <Box sx={{ flex: 1 }}>
      {isLoading ? (
        <Loader sx={{ height: "80vh" }} />
      ) : (
        <PeopleList data={people} hasMore={hasMore} next={fetchPeople} />
      )}
    </Box>
  );
};
