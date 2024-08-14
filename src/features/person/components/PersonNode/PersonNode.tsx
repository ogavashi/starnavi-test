import { Box, CardMedia, Divider, Paper, Typography } from "@mui/material";
import { IPerson } from "@types";
import { Handle, Position } from "@xyflow/react";
import type { Node, NodeProps } from "@xyflow/react";

type PersonNodeProps = Node<{ person: IPerson }, "person">;

export const PersonNode = ({ data }: NodeProps<PersonNodeProps>) => {
  const { person } = data;

  return (
    <>
      <Box>
        <Paper elevation={3} sx={{ padding: 2, maxWidth: 300 }}>
          <CardMedia
            component="img"
            image={`https://starwars-visualguide.com/assets/img/characters/${person.id}.jpg`}
            alt={person.name}
            title={person.name}
          />
          <Typography variant="h6" gutterBottom>
            {person.name}
          </Typography>
          <Divider />
          <Typography variant="body2" color="textSecondary">
            <strong>Height:</strong> {person.height} cm
          </Typography>
          <Typography variant="body2" color="textSecondary">
            <strong>Mass:</strong> {person.mass} kg
          </Typography>
          <Typography variant="body2" color="textSecondary">
            <strong>Hair Color:</strong> {person.hair_color}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            <strong>Skin Color:</strong> {person.skin_color}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            <strong>Eye Color:</strong> {person.eye_color}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            <strong>Birth Year:</strong> {person.birth_year}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            <strong>Gender:</strong> {person.gender}
          </Typography>
        </Paper>
        <Handle type="source" position={Position.Bottom} id="a" />
        <Handle type="source" position={Position.Bottom} id="b" />
      </Box>
    </>
  );
};
