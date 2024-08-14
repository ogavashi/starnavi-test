import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import { Button } from "@mui/material";
import Logo from "../../../assets/logo.svg?react";

import { ThemeModeSwitch, ThemeSwitch } from "@features/app";
import { Link } from "react-router-dom";
import { ROUTES } from "@features/navigation";

export const Header = () => {
  return (
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}
        >
          <Button component={Link} to={ROUTES.HOME} size="large" color="inherit">
            <Logo />
          </Button>
          <Box sx={{ flexGrow: 0 }}>
            <ThemeModeSwitch />
            <ThemeSwitch />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
