import { ToggleButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ThemeContext } from "../ThemeProvider";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

export const ThemeModeSwitch = () => {
  const theme = useTheme();
  const colorMode = useContext(ThemeContext);
  return (
    <ToggleButton
      style={{ borderRadius: "50px", border: "none", color: "inherit" }}
      value="check"
      onChange={colorMode.toggleColorMode}
    >
      {theme.palette.mode === "dark" && <LightModeIcon />}
      {theme.palette.mode === "light" && <DarkModeIcon />}
    </ToggleButton>
  );
};
