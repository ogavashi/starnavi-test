import { NODES_DIMENSION } from "@constants";
import { Box, Divider, Paper, Typography } from "@mui/material";
import { IFilm } from "@types";
import { Handle, Position } from "@xyflow/react";
import type { Node, NodeProps } from "@xyflow/react";

type FilmNodeProps = Node<{ film: IFilm }, "film">;

export const FilmNode = ({ data }: NodeProps<FilmNodeProps>) => {
  const { film } = data;

  return (
    <>
      <Handle type="target" position={Position.Top} />
      <Box>
        <Paper elevation={3} sx={{ padding: 2, maxWidth: NODES_DIMENSION.FILM_WIDTH }}>
          <Typography variant="h6" gutterBottom>
            {film.title}
          </Typography>
          <Divider />
          <Typography variant="body2" color="textSecondary">
            <strong>Episode:</strong> {film.episode_id}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            <strong>Director:</strong> {film.director}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            <strong>Producer:</strong> {film.producer}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            <strong>Release Date:</strong> {film.release_date}
          </Typography>
          <Typography variant="body2" color="textSecondary" textAlign="justify">
            <strong>Opening Crawl:</strong> {film.opening_crawl}
          </Typography>
        </Paper>
        <Handle type="source" position={Position.Bottom} id="a" />
        <Handle type="source" position={Position.Bottom} id="b" />
      </Box>
    </>
  );
};
