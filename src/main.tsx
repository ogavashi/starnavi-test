import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./index.css";
import { StyledEngineProvider } from "@mui/material";
import { AppThemeProvider, UIContextProvider } from "@features/app";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <StyledEngineProvider injectFirst>
      <AppThemeProvider>
        <UIContextProvider>
          <App />
        </UIContextProvider>
      </AppThemeProvider>
    </StyledEngineProvider>
  </StrictMode>
);
