import React, { createContext, useState, PropsWithChildren } from "react";
import { Snackbar, Alert, SnackbarCloseReason } from "@mui/material";

interface UIContextProps {
  showSnackbar: (message: string, severity?: "success" | "info" | "warning" | "error") => void;
}

export const UIContext = createContext<UIContextProps | undefined>(undefined);

export const UIContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [snackbarState, setSnackbarState] = useState<{
    message: string;
    open: boolean;
    severity?: "success" | "info" | "warning" | "error";
  }>({
    message: "",
    open: false,
    severity: "info",
  });

  const showSnackbar = (
    message: string,
    severity: "success" | "info" | "warning" | "error" = "info"
  ) => {
    setSnackbarState({ message, open: true, severity });
  };

  const handleClose = (_event?: React.SyntheticEvent | Event, reason?: SnackbarCloseReason) => {
    if (reason === "clickaway") return;
    setSnackbarState({ ...snackbarState, open: false });
  };

  return (
    <UIContext.Provider value={{ showSnackbar }}>
      {children}
      <Snackbar
        open={snackbarState.open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert onClose={handleClose} severity={snackbarState.severity} sx={{ width: "100%" }}>
          {snackbarState.message}
        </Alert>
      </Snackbar>
    </UIContext.Provider>
  );
};
