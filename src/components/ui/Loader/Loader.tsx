import { Box, CircularProgress, SxProps } from "@mui/material";

interface LoaderProps {
  sx?: SxProps;
}

export const Loader = ({ sx = {} }: LoaderProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        ...sx,
      }}
    >
      <CircularProgress />
    </Box>
  );
};
