import { useContext } from "react";
import { UIContext } from "../../components";

export const useSnackbar = () => {
  const context = useContext(UIContext);
  if (!context) {
    throw new Error("useSnackbar must be used within a SnackbarProvider");
  }
  return context;
};
