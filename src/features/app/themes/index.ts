import { theme as blue } from "./blue";
import { theme as red } from "./red";
import { theme as green } from "./green";
import { theme as _default } from "./default";
import { Palette, PaletteColor } from "@mui/material/styles";

type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};
declare module "@mui/material/styles" {
  interface Palette {
    upvote?: PaletteColor;
    downvote?: PaletteColor;
    containerPrimary?: PaletteColor;
    containerSecondary?: PaletteColor;
  }
  interface PaletteOptions {
    upvote?: PaletteColor;
    downvote?: PaletteColor;
    containerPrimary?: PaletteColor;
    containerSecondary?: PaletteColor;
  }
}
declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    upvote: true;
    downvote: true;
  }
}
declare module "@mui/material/CircularProgress" {
  interface CircularProgressPropsColorOverrides {
    upvote: true;
    downvote: true;
  }
}

export interface AppTheme {
  dark: {
    palette: DeepPartial<Palette>;
  };
  light: {
    palette: DeepPartial<Palette>;
  };
}

export const color = {
  0: _default,
  1: blue,
  2: red,
  3: green,
};
