import { NODES_DIMENSION } from "@constants";
import { Box, Divider, Paper, Typography } from "@mui/material";
import { IStarship } from "@types";
import { Handle, Position } from "@xyflow/react";
import type { Node, NodeProps } from "@xyflow/react";

type StarshipNodeProps = Node<{ starship: IStarship }, "starship">;

export const StarshipNode = ({ data }: NodeProps<StarshipNodeProps>) => {
  const { starship } = data;

  return (
    <>
      <Handle type="target" position={Position.Top} />
      <Box>
        <Paper elevation={3} sx={{ padding: 2, maxWidth: NODES_DIMENSION.STARSHIP_WIDTH }}>
          <Typography variant="h6" gutterBottom>
            {starship.name}
          </Typography>
          <Divider />
          <Typography variant="body2" color="textSecondary">
            <strong>Model:</strong> {starship.model}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            <strong>Manufacturer:</strong> {starship.manufacturer}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            <strong>Starship Class:</strong> {starship.starship_class}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            <strong>Hyperdrive Rating:</strong> {starship.hyperdrive_rating}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            <strong>Length:</strong> {starship.length}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            <strong>Crew:</strong> {starship.crew}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            <strong>Passengers:</strong> {starship.passengers}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            <strong>Cargo Capacity:</strong> {starship.cargo_capacity}
          </Typography>
        </Paper>
      </Box>
    </>
  );
};
