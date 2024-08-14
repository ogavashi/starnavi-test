import { Box, useTheme } from "@mui/material";
import { Background, Controls, ReactFlow } from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { IPersonDetails } from "@types";
import { useFlow } from "@features/person";

interface PersonDetailsProps {
  personDetails: IPersonDetails;
}

export const PersonDetails = ({ personDetails }: PersonDetailsProps) => {
  const theme = useTheme();

  const { nodes, onNodesChange, edges, nodeTypes } = useFlow(personDetails);

  return (
    <Box sx={{ height: "100%", flex: 1 }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        nodeTypes={nodeTypes}
        fitView
        colorMode={theme.palette.mode}
      >
        <Background />
        <Controls />
      </ReactFlow>
    </Box>
  );
};
