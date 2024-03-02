"use client";

import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ffffff",
      contrastText: "#626262",
    },
    background: {
      default: "#ababab",
    },
    text: {
      secondary: "#ffffff",
    },
  },
});

export default theme;
