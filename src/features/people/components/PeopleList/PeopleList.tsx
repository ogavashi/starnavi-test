import { Box } from "@mui/material";
import InfiniteScroll from "react-infinite-scroll-component";
import { PersonCard } from "../PersonCard";
import { IPerson } from "@types";
import { Loader } from "@components";

interface PeopleListProps {
  data: IPerson[];
  hasMore: boolean;
  next: () => Promise<void>;
}

export const PeopleList = ({ data, hasMore, next }: PeopleListProps) => {
  return (
    <InfiniteScroll
      style={{ overflow: "unset" }}
      dataLength={data.length}
      next={next}
      hasMore={hasMore}
      loader={<Loader sx={{ mt: 5 }} />}
    >
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 5, justifyContent: "center" }}>
        {data.map((person) => (
          <PersonCard key={person.id} person={person} />
        ))}
      </Box>
    </InfiniteScroll>
  );
};
