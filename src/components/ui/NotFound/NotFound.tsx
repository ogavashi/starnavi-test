import { Box, Typography } from "@mui/material";

export const NotFound = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        flex: "1",
        height: "100%",
      }}
    >
      <Typography variant="h1" style={{ color: "white" }}>
        404
      </Typography>
      <Typography variant="h2" style={{ color: "white" }}>
        Not Found
      </Typography>
    </Box>
  );
};
