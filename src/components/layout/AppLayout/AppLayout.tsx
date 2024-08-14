import { Box, Container } from "@mui/material";
import { Header } from "./Header";
import { Outlet } from "react-router-dom";

export const AppLayout = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Header />
      <Container maxWidth="xl" sx={{ py: 4, flex: 1, display: "flex" }}>
        <Outlet />
      </Container>
    </Box>
  );
};
