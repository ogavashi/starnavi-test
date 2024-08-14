import React, { PropsWithChildren, useEffect, useMemo, useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyles from "@mui/material/GlobalStyles";
import { ThemeProvider, createTheme, ThemeOptions } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { color as ThemeColors } from "../../themes";

export const ThemeContext = React.createContext({
  toggleColorMode: () => {},
  shuffleColorTheme: () => {},
});

export const AppThemeProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const [mode, setMode] = useState<"light" | "dark">(prefersDarkMode ? "dark" : "light");
  const [theme, setTheme] = useState<0 | 1 | 2 | 3>(0);

  useEffect(() => {
    setMode(prefersDarkMode ? "dark" : "light");
  }, [prefersDarkMode]);

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
      shuffleColorTheme: () => {
        setTheme((prevTheme) => ((prevTheme + 1) % 4) as 0 | 1 | 2 | 3);
      },
    }),
    []
  );

  const _theme = React.useMemo(
    () => createTheme(ThemeColors[theme][mode] as ThemeOptions),
    [mode, theme]
  );

  return (
    <ThemeContext.Provider value={colorMode}>
      <ThemeProvider theme={_theme}>
        <GlobalStyles styles={{}} />
        <CssBaseline enableColorScheme />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
