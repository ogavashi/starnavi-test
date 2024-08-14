import { ToggleButton } from "@mui/material";
import { useContext } from "react";
import { ThemeContext } from "../ThemeProvider";
import ColorLensIcon from "@mui/icons-material/ColorLens";

export const ThemeSwitch = () => {
  const colorMode = useContext(ThemeContext);
  return (
    <ToggleButton
      value={"check"}
      style={{ borderRadius: "50px", border: "none", color: "inherit" }}
      onChange={colorMode.shuffleColorTheme}
    >
      <ColorLensIcon />
    </ToggleButton>
  );
};
